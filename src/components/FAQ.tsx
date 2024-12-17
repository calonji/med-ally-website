import { type FC } from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { FAQIllustration } from '@/components/ui/illustrations/FAQIllustration';
import { Search } from 'lucide-react';

const FAQ: FC = () => {
  const faqs = [
    {
      question: "How does MedAlly's voice-to-text feature work?",
      answer: "MedAlly uses advanced AI to convert your natural speech into structured clinical notes in real-time. Simply speak naturally while examining patients, and our system automatically organizes the information into proper medical documentation format."
    },
    {
      question: "Is MedAlly HIPAA compliant?",
      answer: "Yes, MedAlly is fully HIPAA compliant. We implement industry-leading security measures to protect patient data, including end-to-end encryption, secure data centers, and regular security audits."
    },
    {
      question: "Can MedAlly integrate with my existing EHR system?",
      answer: "MedAlly is designed to integrate seamlessly with major EHR systems. We provide API access and dedicated support for custom integrations to ensure smooth workflow incorporation."
    },
    {
      question: "What specialties does MedAlly support?",
      answer: "MedAlly supports a wide range of medical specialties including Primary Care, Cardiology, Pediatrics, and more. Our AI system is trained on specialty-specific data to provide relevant suggestions and documentation templates."
    },
    {
      question: "How accurate is the AI-powered diagnostic support?",
      answer: "Our AI diagnostic support system maintains a 95% accuracy rate, validated through extensive clinical trials. It serves as a supportive tool to enhance, not replace, physician decision-making."
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
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about MedAlly's features, security, and implementation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* FAQ Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <FAQIllustration />
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-gray-900 font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 