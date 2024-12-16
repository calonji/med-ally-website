import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react';

const CTASection: FC = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individual physicians looking for core voice-to-text functionality",
      price: "$0",
      priceDetail: "/month during launch",
      features: [
        "Voice-to-Text Clinical Notes",
        "Basic SOAP Note Structure",
        "Limited Specialty Templates",
      ],
      button: "Start Free Trial",
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced diagnostic and treatment support powered by AI",
      price: "$0",
      priceDetail: "/month during launch",
      features: [
        "Everything in Basic, plus:",
        "AI-Powered Lab Result Analysis",
        "Ranked Differential Diagnoses",
        "Follow-Up Planning Assistance",
        "Expanded Specialty Templates",
        "Risk Assessment & Mitigation"
      ],
      button: "Get Started Free",
      color: "purple",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Advanced team collaboration and custom solutions",
      price: "Custom",
      priceDetail: "Contact us for pricing",
      features: [
        "Multi-User Accounts",
        "Advanced Analytics & Reporting",
        "EHR Integration (API-Ready)",
        "Team Collaboration Features",
        "Custom Workflow Solutions",
        "Dedicated Support Team"
      ],
      button: "Contact Sales",
      color: "indigo",
      popular: false,
      comingSoon: true
    }
  ];

  // Add floating elements animation
  const floatingElements = [
    { icon: <Star className="w-6 h-6" />, color: "text-yellow-500" },
    { icon: <Check className="w-6 h-6" />, color: "text-green-500" },
    { icon: <Sparkles className="w-6 h-6" />, color: "text-blue-500" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundEffects variant="grid3d" />
      
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className={`absolute ${el.color}`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            {el.icon}
          </motion.div>
        ))}

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
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Limited-Time Launch Offer
            </Badge>
          </motion.div>
          
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
            Flexible Plans Built for Your Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try Professional features for $0 during our launch period. Experience the difference AI can make in your workflow risk-free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 inset-x-0 flex justify-center"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 mr-1" fill="currentColor" />
                    </motion.div>
                    Most Popular
                  </Badge>
                </motion.div>
              )}
              
              <Card className={`p-8 h-full bg-white/50 backdrop-blur-sm transition-all duration-300 
                ${plan.popular ? 'border-2 border-blue-500/20 shadow-lg shadow-blue-500/5' : 'border border-gray-200'}
                group-hover:shadow-2xl group-hover:shadow-blue-500/10`}>
                <motion.div
                  initial={false}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">
                      {plan.priceDetail}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <div className="mt-1">
                        {idx === 0 ? (
                          <Star className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <span className="flex items-center">
                    {plan.comingSoon ? 'Coming Soon' : plan.button}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </span>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-8 shadow-lg relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-gray-600 mb-8">
              Join thousands of healthcare providers who are already experiencing the future of medical documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%', opacity: 0.5 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <span className="flex items-center">
                  Schedule Demo
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 