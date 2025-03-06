// @ts-nocheck
import { type FC, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { FAQIllustration } from '@/components/ui/illustrations/FAQIllustration';
import { Search, Plus, Minus, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FAQ: FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { once: false, amount: 0.2 });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does MedAlly's voice-to-text feature work?",
      answer: "MedAlly uses advanced AI to convert your natural speech into structured clinical notes in real-time. Simply speak naturally while examining patients, and our system automatically organizes the information into proper medical documentation format.",
      category: "features",
      icon: "🎙️"
    },
    {
      question: "Is MedAlly HIPAA compliant?",
      answer: "Yes, MedAlly is fully HIPAA compliant. We implement industry-leading security measures to protect patient data, including end-to-end encryption, secure data centers, and regular security audits.",
      category: "security",
      icon: "🔒"
    },
    {
      question: "Can MedAlly integrate with my existing EHR system?",
      answer: "MedAlly is designed to integrate seamlessly with major EHR systems. We provide API access and dedicated support for custom integrations to ensure smooth workflow incorporation.",
      category: "integration",
      icon: "🔄"
    },
    {
      question: "What specialties does MedAlly support?",
      answer: "MedAlly supports a wide range of medical specialties including Primary Care, Cardiology, Pediatrics, and more. Our AI system is trained on specialty-specific data to provide relevant suggestions and documentation templates.",
      category: "features",
      icon: "👨‍⚕️"
    },
    {
      question: "How accurate is the AI-powered diagnostic support?",
      answer: "Our AI diagnostic support system maintains a 95% accuracy rate, validated through extensive clinical trials. It serves as a supportive tool to enhance, not replace, physician decision-making.",
      category: "features",
      icon: "🎯"
    },
    {
      question: "What kind of training is required to use MedAlly?",
      answer: "MedAlly is designed with an intuitive interface that requires minimal training. Most users become proficient within a few hours. We provide comprehensive onboarding resources including video tutorials, documentation, and live support sessions.",
      category: "implementation",
      icon: "🧠"
    },
    {
      question: "How does MedAlly handle patient data privacy?",
      answer: "Patient data privacy is our top priority. MedAlly employs bank-level encryption, strict access controls, and regular security audits. We are fully compliant with HIPAA, GDPR, and other relevant data protection regulations.",
      category: "security",
      icon: "🛡️"
    }
  ];

  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      className="relative  overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
      ref={faqRef}
    >
      <BackgroundEffects variant="grid3d" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full filter blur-[80px] opacity-60 animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[25rem] h-[25rem] bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full filter blur-[60px] opacity-50 animate-float-delayed"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* FAQ Illustration with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl transform -rotate-2 scale-105"
              animate={{ 
                rotate: [-2, 1, -2],
                scale: [1.05, 1.03, 1.05]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="relative z-10 p-6"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <FAQIllustration />
              
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <a 
                  href="https://www.calonji.com/contact" 
                  className="w-full inline-block"
                >
                  <Button className="w-full apple-button bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-full font-medium flex items-center justify-center gap-2 group">
                    <span>Contact Us</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative mb-8 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {searchQuery && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              <AnimatePresence>
                {filteredFaqs.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-8"
                  >
                    <p className="text-gray-500">No questions found matching "{searchQuery}"</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-2 text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Clear search
                    </button>
                  </motion.div>
                ) : (
                  <Accordion 
                    type="single" 
                    collapsible 
                    className="space-y-4"
                    value={activeItem || undefined}
                    onValueChange={(value) => setActiveItem(value)}
                  >
                    {filteredFaqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="apple-card border border-gray-200 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm transition-all duration-300"
                          data-state={activeItem === `item-${index}` ? "open" : "closed"}
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{faq.icon}</span>
                              <span className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                                {faq.question}
                              </span>
                            </div>
                            <div className="shrink-0 ml-2">
                              {activeItem === `item-${index}` ? (
                                <Minus className="h-5 w-5 text-blue-500" />
                              ) : (
                                <Plus className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 pt-1">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="flex gap-2 mb-2">
                                <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                                  {faq.category}
                                </Badge>
                                {hoveredItem === index && activeItem === `item-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center"
                                  >
                                    <Sparkles className="h-4 w-4 text-amber-400 mr-1" />
                                    <span className="text-xs text-gray-500">Helpful info</span>
                                  </motion.div>
                                )}
                              </div>
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                )}
              </AnimatePresence>
            </motion.div>
            
            <div className="mt-8 text-center lg:hidden">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <a 
                href="https://www.calonji.com/contact" 
                className="w-full inline-block"
              >
                <Button className="w-full apple-button bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-full font-medium flex items-center justify-center gap-2 group">
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 