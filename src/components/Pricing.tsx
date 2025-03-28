// @ts-nocheck
import { type FC, useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Check, ChevronRight, Sparkles, X, Zap, Star, Shield, Brain, ArrowRight, Gift, Clock } from 'lucide-react';
import { type Plan } from '@/types';

const Pricing: FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(pricingRef, { once: false, amount: 0.2 });
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Parallax effect for background
  const y = useMotionValue(0);
  const backgroundY = useTransform(y, [0, 1], [0, 0.5]);

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (pricingRef.current) {
        const scrollPosition = window.scrollY;
        const pricingPosition = pricingRef.current.offsetTop;
        setIsScrolled(scrollPosition > pricingPosition + 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monthly prices
  const monthlyPrices = {
    "Forever Free": "$0",
    "Professional": "$49.99",
    "Ultimate": "$99.99",
    "Enterprise": "Custom"
  };

  // Annual prices
  const annualPrices = {
    "Forever Free": "$0",
    "Professional": "$479.90",
    "Ultimate": "$959.90",
    "Enterprise": "Custom"
  };

  // Calculate monthly equivalent from annual price
  const calculateMonthlyEquivalent = (annual: string): string => {
    if (annual === "Custom" || annual === "$0") return annual;
    
    const annualValue = parseFloat(annual.replace("$", ""));
    const monthlyEquivalent = annualValue / 12;
    
    return `$${monthlyEquivalent.toFixed(2)}`;
  };

  // Savings calculation
  const calculateSavings = (monthly: string, annual: string): string => {
    if (monthly === "Custom" || annual === "Custom" || monthly === "$0") return "";
    
    const monthlyValue = parseFloat(monthly.replace("$", ""));
    const annualValue = parseFloat(annual.replace("$", ""));
    
    const annualCost = monthlyValue * 12;
    const savings = annualCost - annualValue;
    const savingsPercentage = (savings / annualCost) * 100;
    
    return savings > 0 ? `Save ${savingsPercentage.toFixed(0)}%` : "";
  };

  const plans: Plan[] = [
    {
      name: "Forever Free",
      description: "Explore the platform",
      price: "$0",
      priceDetail: "Free forever",
      features: [
        "10 Encounters per month",
        "Multilingual AI Scribe",
        "Clinical Documentation",
        "Lab Follow-Up Analysis",
        "Diagnostic recommendations",
        "Clinical Guidelines"
      ],
      button: "Signup Now",
      color: "blue",
      popular: false
    },
    {
      name: "Professional",
      description: "For documnentation",
      price: isAnnual ? calculateMonthlyEquivalent(annualPrices["Professional"]) : monthlyPrices["Professional"],
      priceDetail: isAnnual ? "/month, billed annually" : "/month",
      features: [
        "Unlimited Encounters",
        "Advanced AI Scribe",
        "Comprehensive Documentation",
        "Lab Results Analysis",
        "Evidence-Based AI Learning",
        "Clinical Pattern Recognition",
        "Specialty Adaptation",
        "Adaptive AI Communication",
        "Medical Coding Automation"
      ],
      button: "Signup Now",
      color: "purple",
      popular: false
    },
    {
      name: "Ultimate",
      description: "Complete solution for physicians",
      price: isAnnual ? calculateMonthlyEquivalent(annualPrices["Ultimate"]) : monthlyPrices["Ultimate"],
      priceDetail: isAnnual ? "/month, billed annually" : "/month",
      features: [
        "All Professional features",
        "Differential Diagnosis",
        "Diagnostic Plan & Testing",
        "Predictive Guidelines",
        "Treatment Implementation",
        "Medication Optimization",
        "Patient Monitoring",
        "High-Risk Patient Plans",
        "Clinical Recommendations"
      ],
      button: "Signup Now",
      color: "indigo",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for teams",
      price: "Custom",
      priceDetail: "",
      features: [
        "All Ultimate features",
        "Dedicated Support",
        "Custom Integrations",
        "Priority Development",
        "EMR/EHR Integration",
        "White Glove Service",
        "Dedicated Account Manager"
      ],
      button: "Contact Us",
      color: "emerald",
      popular: false,
      comingSoon: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    }
  };

  // Plan icons
  const planIcons = {
    "Forever Free": <Zap className="w-5 h-5" />,
    "Professional": <Star className="w-5 h-5" />,
    "Ultimate": <Brain className="w-5 h-5" />,
    "Enterprise": <Shield className="w-5 h-5" />
  };

  // Benefits by plan
  const planBenefits = {
    "Forever Free": [
      { icon: <Clock className="w-4 h-4" />, text: "Quick setup" },
      { icon: <Zap className="w-4 h-4" />, text: "Basic AI features" }
    ],
    "Professional": [
      { icon: <Clock className="w-4 h-4" />, text: "Save 5+ hours/week" }
     
    ],
    "Ultimate": [
      { icon: <Clock className="w-4 h-4" />, text: "Save 10+ hours/week" }
    ],
    "Enterprise": [
      { icon: <Shield className="w-4 h-4" />, text: "Custom SLA" },
      { icon: <Gift className="w-4 h-4" />, text: "Onboarding support" }
    ]
  };

  return (
    <section 
      className="relative  overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
      ref={pricingRef}
      id="pricing"
    >
      <BackgroundEffects variant="grid3d" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-[15%] right-[10%] w-[35rem] h-[35rem] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full filter blur-[80px] opacity-60 animate-float"
        ></motion.div>
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-[15%] left-[10%] w-[30rem] h-[30rem] bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full filter blur-[60px] opacity-50 animate-float-delayed"
        ></motion.div>
      </div>
      
      {/* Sticky CTA for mobile */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden"
          >
            <a 
              href="https://app.medally.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Get Started with MedAlly</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className=" relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
      
          
          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <motion.div 
              className="bg-white p-1.5 rounded-full shadow-md flex items-center"
              whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAnnual 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Annual
                {isAnnual && (
                  <span className="ml-2 text-sm bg-white/20 text-white px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isAnnual 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className={`relative ${plan.popular ? "z-10" : ""} w-full`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <motion.div 
                className={`apple-card h-full p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border ${
                  plan.popular ? "border-indigo-200 bg-gradient-to-b from-white via-indigo-50/20 to-indigo-100/30 shadow-indigo-200/50" : "border-gray-100"
                } relative pb-24 min-h-[600px]`}
                whileHover={{ 
                  y: -5,
                  boxShadow: plan.popular ? "0 20px 30px -5px rgba(79, 70, 229, 0.15)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {plan.popular && (
                  <div className="absolute -top-1 -right-1 -left-1">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-t-xl text-center text-sm font-semibold shadow-lg flex items-center justify-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Most Popular Choice
                    </div>
                  </div>
                )}
                
                {/* Glow effect on hover */}
                {hoveredPlan === index && (
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl ${
                      plan.color === 'blue' ? 'bg-gradient-to-br from-blue-400/10 to-blue-600/5' :
                      plan.color === 'indigo' ? 'bg-gradient-to-br from-indigo-400/10 to-indigo-600/5' :
                      plan.color === 'purple' ? 'bg-gradient-to-br from-purple-400/10 to-purple-600/5' :
                      'bg-gradient-to-br from-gray-400/10 to-gray-600/5'
                    } -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full ${
                      plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      plan.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                      plan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {planIcons[plan.name as keyof typeof planIcons]}
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">
                      {plan.priceDetail}
                    </span>
                  </div>
                  {isAnnual && plan.name !== "Forever Free" && plan.name !== "Enterprise" && (
                    <div className="mt-1 text-sm text-gray-500">
                      <span className="font-medium text-indigo-600">
                        {annualPrices[plan.name as keyof typeof annualPrices]}
                      </span> billed annually
                      <span className="ml-1 text-sm text-green-600 font-medium">
                        ({calculateSavings(monthlyPrices[plan.name as keyof typeof monthlyPrices], annualPrices[plan.name as keyof typeof annualPrices])})
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Plan benefits */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-2">
                    {planBenefits[plan.name as keyof typeof planBenefits].map((benefit, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                          plan.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                          plan.color === 'indigo' ? 'bg-indigo-50 text-indigo-700' :
                          plan.color === 'purple' ? 'bg-purple-50 text-purple-700' :
                          'bg-gray-50 text-gray-700'
                        } text-sm`}
                      >
                        {benefit.icon}
                        <span>{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-5">
                  <ul className="space-y-1.5">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-1.5 truncate"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onMouseEnter={() => setSelectedFeature(feature)}
                        onMouseLeave={() => setSelectedFeature(null)}
                      >
                        <span className={`shrink-0 mt-0.5 flex items-center justify-center w-3.5 h-3.5 rounded-full ${
                          plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          plan.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                          plan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        } ${selectedFeature === feature ? 'scale-125' : ''} transition-transform duration-200`}>
                          <Check className="w-2 h-2" />
                        </span>
                        <span className={`text-sm ${
                          selectedFeature === feature ? (
                            plan.color === 'blue' ? 'text-blue-700' :
                            plan.color === 'indigo' ? 'text-indigo-700' :
                            plan.color === 'purple' ? 'text-purple-700' :
                            'text-gray-700'
                          ) : 'text-gray-600'
                        } font-medium truncate transition-colors duration-200`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <a 
                    href={plan.name === "Enterprise" ? "https://www.calonji.com/contact" : "https://app.medally.ai/"}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full apple-button ${
                      plan.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      plan.color === 'indigo' ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                      plan.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    } text-white py-2 px-3 rounded-full text-sm font-medium flex items-center justify-center gap-1.5 group hover:shadow-lg transition-all duration-300`}
                  >
                    <span>{plan.button}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Feature comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-6xl mx-auto px-4 sm:px-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Compare Plan Features</h3>
          
          <div className="overflow-x-auto rounded-xl shadow-md bg-white">
            <div className="min-w-[800px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left text-gray-500 font-medium sticky left-0 bg-white z-10">Feature</th>
                    {plans.map(plan => (
                      <th key={plan.name} className="py-4 px-6 text-center">
                        <span className={`${
                          plan.color === 'blue' ? 'text-blue-600' :
                          plan.color === 'indigo' ? 'text-indigo-600' :
                          plan.color === 'purple' ? 'text-purple-600' :
                          'text-gray-600'
                        } font-bold`}>{plan.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Encounters", values: ["10/month", "Unlimited", "Unlimited", "Unlimited"] },
                    { name: "AI Scribe", values: ["Basic", "Advanced", "Advanced", "Advanced"] },
                    { name: "Clinical Documentation", values: ["Basic", "Comprehensive", "Comprehensive", "Comprehensive"] },
                    { name: "Lab Follow-Up", values: ["✓", "✓", "✓", "✓"] },
                    { name: "Predictive Results Analysis", values: ["✓", "✓", "✓", "✓"] },
                    { name: "Predictive Differential Diagnosis", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Clinical Ranking", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Diagnostic Tests", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Prioritized Testing", values: ["✓", "✗", "✓", "✓"] },
                    { name: "AI-Powered Findings", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Predictive Clinical Guidelines", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Step-by-Step Predictive Treatment Implementation", values: ["✓", "✗", "✓", "✓"] },
                    { name: "AI-Powered Treatment Medications", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Dosage Optimization", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Predictive Patient Monitoring", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Trend Analysis", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Contingency Plans for High-Risk Patients", values: ["✓", "✗", "✓", "✓"] },
                    { name: "AI-Driven Clinical Recommendations", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Implementation Details", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Evidence-Based AI Learning", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Clinical Pattern Recognition", values: ["✓", "✗", "✓", "✓"] },
                    { name: "Tailored to Your Specialty", values: ["✓", "✓", "✓", "✓"] },
                    { name: "Adaptive AI Communication", values: ["✓", "✓", "✓", "✓"] },
                    { name: "Comprehensive AI-Powered Medical Coding", values: ["✓", "✗", "✓", "✓"] },
                    { name: "EHR Integration", values: ["✗", "✗", "✗", "✓"] },
                    { name: "Dedicated Support", values: ["✗", "✗", "✗", "✓"] }
                  ].map((feature, i) => (
                    <motion.tr 
                      key={i} 
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                    >
                      <td className="py-3 px-6 text-gray-800 font-medium sticky left-0 bg-inherit z-10">{feature.name}</td>
                      {feature.values.map((value, j) => (
                        <td key={j} className="py-3 px-6 text-center text-gray-600">
                          {value === "✓" ? (
                            <motion.div 
                              whileHover={{ scale: 1.2 }}
                              className="flex justify-center"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.2, delay: (i * 0.03) + (j * 0.02) }}
                            >
                              <Check className="w-5 h-5 text-green-500" />
                            </motion.div>
                          ) : value === "✗" ? (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Mobile indicator for horizontal scrolling */}
          <div className="mt-4 text-center text-sm text-gray-500 md:hidden">
            <span>Swipe left/right to see more features</span>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {[
              
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your billing cycle."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the advertised price."
              },
              {
                question: "Do you offer discounts for educational institutions?",
                answer: "Yes, we offer special pricing for educational and non-profit organizations. Please contact our sales team for details."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="https://www.calonji.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-indigo-300 text-indigo-600 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
            >
              <span>Contact our team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 