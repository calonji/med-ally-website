// @ts-nocheck
import { FC } from 'react';
import { motion } from 'framer-motion';

const CallToAction: FC = () => {
  return (
    <section className="py-20 bg-[#4b2683] text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3
              }}
              animate={{
                y: [0, Math.random() > 0.5 ? -15 : 15, 0],
                x: [0, Math.random() > 0.5 ? -10 : 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the Future of AI-Powered Healthcare
            </h2>
            <p className="text-xl text-white mb-10 leading-relaxed">
              Join thousands of physicians who have transformed their practice with MedAlly's 
              AI clinical assistant. Reduce burnout, enhance patient care, and revolutionize 
              your workflow today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://app.medally.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-lg shadow-lg transition-all duration-300"
              >
                Start Your Free Trial
              </a>
              
              <a 
                href="https://www.calonji.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-white border-2 border-white hover:bg-white/10 rounded-lg transition-all duration-300"
              >
                Book a Demo
              </a>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">
              <p>No credit card required. Free 30-day trial for qualified healthcare providers.</p>
              <p className="mt-2">HIPAA compliant. 256-bit encryption.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex justify-center gap-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            
            {/* <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-medium">SOC 2 Certified</span>
            </div> */}
            
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-medium">AI-Powered Healthcare</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 