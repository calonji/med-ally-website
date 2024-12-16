import { type FC } from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { Badge } from "@/components/ui/badge";

const FAQ: FC = () => {
  const faqs = [
    {
      question: "How accurate is the AI transcription?",
      answer: "Our AI achieves 98%+ accuracy in medical transcription, trained on millions of clinical notes. The system continuously learns and improves from user feedback."
    },
    {
      question: "Is MedAlly HIPAA compliant?",
      answer: "Yes, MedAlly is fully HIPAA compliant. We maintain strict security protocols, regular audits, and provide BAAs to covered entities. All data is encrypted at rest and in transit."
    },
    {
      question: "Which EHR systems do you integrate with?",
      answer: "MedAlly integrates seamlessly with major EHR systems including Epic, Cerner, Allscripts, and many others through our secure API. Custom integrations are also available."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical implementation takes 2-4 weeks, including integration, training, and customization. Our dedicated team ensures a smooth transition with minimal disruption to your workflow."
    },
    {
      question: "What languages are supported?",
      answer: "Currently, MedAlly supports English, Spanish, French, and Mandarin, with more languages being added regularly. Each language model is specifically trained on medical terminology."
    },
    {
      question: "How do you handle specialty-specific terminology?",
      answer: "Our AI is trained on specialty-specific datasets and can be further customized to your practice's terminology. We support 30+ medical specialties with dedicated terminology models."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <BackgroundEffects variant="circuit" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/doctor-ai.jpg" 
                alt="Doctor using AI assistant"
                className="w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">98%</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">Accuracy Rate</div>
                  <div className="text-gray-500">in transcription</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know about MedAlly and how it can transform your practice
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200"
                  >
                    <AccordionTrigger className="px-6 hover:no-underline">
                      <span className="text-left font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 mb-4">
                Still have questions?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact our support team
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 