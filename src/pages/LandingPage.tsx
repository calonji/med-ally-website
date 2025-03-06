// @ts-nocheck
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import AIAgents from '@/components/AIAgents';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Lightbulb, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  CreditCard 
} from 'lucide-react';

// Simplified landing page that focuses on the hero section and provides links to other pages
const LandingPage: FC = () => {
  const exploreCards = [
    {
      id: 'about',
      title: 'About Us',
      description: 'Learn about our mission to transform healthcare with AI-powered solutions and our commitment to reducing physician burnout.',
      icon: <Users className="w-6 h-6" />,
      link: '/about-us',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-blue-600 transition-colors duration-300",
        button: "w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-blue-600",
        tag: "text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700"
      },
      keywords: ['AI-powered healthcare', 'physician burnout solution']
    },
    {
      id: 'how-it-works',
      title: 'How It Works',
      description: 'Discover how our AI clinical assistant streamlines healthcare documentation and automates clinical workflows.',
      icon: <Lightbulb className="w-6 h-6" />,
      link: '/how-it-works',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-purple-100 text-purple-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-purple-600 transition-colors duration-300",
        button: "w-full group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-purple-600",
        tag: "text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700"
      },
      keywords: ['AI clinical assistant', 'clinical workflow automation']
    },
    {
      id: 'features',
      title: 'Features',
      description: 'Explore our comprehensive AI-powered medical documentation and diagnostic tools for healthcare professionals.',
      icon: <Sparkles className="w-6 h-6" />,
      link: '/features',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-indigo-600 transition-colors duration-300",
        button: "w-full group-hover:bg-indigo-50 group-hover:border-indigo-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-indigo-600",
        tag: "text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700"
      },
      keywords: ['AI medical documentation', 'AI-powered diagnosis tool']
    },
    {
      id: 'benefits',
      title: 'Benefits',
      description: 'See how medical AI scribe and predictive analytics can benefit your healthcare practice.',
      icon: <TrendingUp className="w-6 h-6" />,
      link: '/benefits',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-emerald-600 transition-colors duration-300",
        button: "w-full group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-emerald-600",
        tag: "text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700"
      },
      keywords: ['medical AI scribe', 'predictive analytics in healthcare']
    },
    {
      id: 'roi',
      title: 'ROI Calculator',
      description: 'Calculate your potential savings with our AI-driven medical decision-making tools and automation solutions.',
      icon: <BarChart3 className="w-6 h-6" />,
      link: '/roi-calculator',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-amber-100 text-amber-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-amber-600 transition-colors duration-300",
        button: "w-full group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-amber-600",
        tag: "text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-700"
      },
      keywords: ['AI-driven medical decision-making', 'medical AI automation']
    },
    {
      id: 'pricing',
      title: 'Pricing',
      description: 'View our flexible pricing plans for our AI-powered healthcare platform designed for practices of all sizes.',
      icon: <CreditCard className="w-6 h-6" />,
      link: '/pricing',
      colorClasses: {
        gradient: "absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-rose-300 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300",
        icon: "p-3 rounded-lg bg-rose-100 text-rose-600 group-hover:scale-110 transition-transform duration-300",
        title: "text-xl font-bold group-hover:text-rose-600 transition-colors duration-300",
        button: "w-full group-hover:bg-rose-50 group-hover:border-rose-200 transition-colors duration-300",
        arrow: "h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-rose-600",
        tag: "text-xs px-2 py-1 rounded-full bg-rose-50 text-rose-700"
      },
      keywords: ['AI-powered healthcare', 'AI clinical assistant']
    }
  ];

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
    <Layout>
      <SEO 
        title="MedAlly | AI-Powered Healthcare Automation & Clinical Assistant"
        description="16 AI-powered agents streamline clinical workflows, automate documentation, and enhance patient care. Discover how MedAlly transforms healthcare today."
        url="https://medally.ai"
      />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="problem-solution">
          <ProblemSolution />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="ai-agents">
          <AIAgents />
        </section>
        
        {/* AI Harmony Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#36b7b5] to-[#4b2683]">
                AI Harmony in Healthcare
              </h2>
              
              <p className="text-xl mb-12 text-gray-700">
                MedAlly's 16 AI agents work in perfect harmony, automating, optimizing, and accelerating clinical workflows like never before.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Accelerated Workflows</h3>
                  <p className="text-gray-600">
                    Reduce documentation time by 70% with AI that handles the administrative burden so you can focus on patient care.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Enhanced Accuracy</h3>
                  <p className="text-gray-600">
                    Achieve 93% diagnostic accuracy and 99.7% coding precision with AI that learns and improves with every interaction.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Increased Revenue</h3>
                  <p className="text-gray-600">
                    Boost practice revenue by 14% through optimized billing, reduced claim denials, and more time for patient care.
                  </p>
                </motion.div>
              </div>
              
              <div className="bg-gradient-to-r from-[#36b7b5] to-[#4b2683] text-white p-8 rounded-xl max-w-3xl mx-auto mb-10 shadow-lg">
                <p className="text-2xl font-bold mb-4">
                  Physicians are overburdened. MedAlly is the game-changer they've been waiting for.
                </p>
                <p className="text-lg opacity-90 mb-6">
                  Join thousands of physicians who have reclaimed their time and rediscovered the joy of practicing medicine.
                </p>
                <a 
                  href="https://app.medally.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Experience the AI Revolution
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Testimonials />
        
        <section id="call-to-action">
          <CallToAction />
        </section>
        
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Explore MedAlly</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI-powered healthcare platform can transform your practice
                with advanced clinical workflow automation and documentation tools.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {exploreCards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={card.colorClasses.gradient}></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={card.colorClasses.icon}>
                        {card.icon}
                      </div>
                      <h3 className={card.colorClasses.title}>{card.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{card.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {card.keywords.map((keyword, idx) => (
                          <span 
                            key={idx} 
                            className={card.colorClasses.tag}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      
                      <Link to={card.link}>
                        <Button 
                          variant="outline" 
                          className={card.colorClasses.button}
                        >
                          Click here to Explore More
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={card.colorClasses.arrow} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <Link to="/faq">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg transition-all duration-300"
                >
                  Frequently Asked Questions
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default LandingPage;
