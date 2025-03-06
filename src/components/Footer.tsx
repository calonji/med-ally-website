import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Youtube, Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Enhanced quicklinks with all header links and additional URLs
  const quickLinks = [
    // Internal links (from header)
    { name: 'About Us', path: '/about-us', isExternal: false },
    { name: 'How It Works', path: '/how-it-works', isExternal: false },
    { name: 'Features', path: '/features', isExternal: false },
    { name: 'Benefits', path: '/benefits', isExternal: false },
    { name: 'ROI Calculator', path: '/roi-calculator', isExternal: false },
    { name: 'FAQ', path: '/faq', isExternal: false },
    { name: 'Pricing', path: '/pricing', isExternal: false },
    
    // External links (additional URLs)
    { name: 'Calonji Website', path: 'https://www.calonji.com/', isExternal: true },
    { name: 'MedAlly App', path: 'https://app.medally.ai/', isExternal: true },
    { name: 'Blog', path: 'https://www.calonji.com/blog', isExternal: true },
    { name: 'Contact Us', path: 'https://www.calonji.com/contact', isExternal: true },
    { name: 'Privacy Policy', path: 'https://www.calonji.com/privacy-policy', isExternal: true },
    { name: 'Terms of Service', path: 'https://www.calonji.com/terms-of-service', isExternal: true },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/medally-ai', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com/medAllyAI', label: 'X (Twitter)' },
    {
      Icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=491843437354106',
      label: 'Facebook',
    },
    { Icon: Instagram, href: 'https://www.instagram.com/medally_saas', label: 'Instagram' },
    { Icon: Youtube, href: 'https://www.youtube.com/@Med-Ally', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About MedAlly */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About MedAlly</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MedAlly is an AI-powered healthcare management platform designed to streamline
              workflows, reduce administrative burdens, and empower healthcare providers to focus on
              patient care. From voice-driven documentation to AI-powered diagnostic insights, we're
              building tools that transform how healthcare professionals work.
            </p>
          </motion.div>

          {/* Quick Links - Enhanced with all navigation links */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <div key={link.name} className="flex items-center">
                  {link.isExternal ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Parent Company */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Parent Company – Calonji</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MedAlly is a product of Calonji, Inc. a company committed to building innovative,
              human-centered solutions that leverage AI and technology to solve real-world
              challenges in healthcare and beyond.
            </p>
          </motion.div>
        </div>

        {/* Full-width Waitlist Button */}
        <motion.div {...fadeInUp} className="py-8 border-t border-gray-800">
          <a 
            href="https://app.medally.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 hover:bg-orange-600 hover:text-white text-white py-6 text-lg font-semibold rounded-lg shadow-lg group transition-all duration-300"
          >
            <span className="flex items-center justify-center">
              Join the Future of Healthcare
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          {...fadeInUp}
          className="flex justify-center space-x-6 py-8 border-t border-gray-800"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...fadeInUp}
          className="text-center text-sm text-gray-500 pt-4 border-t border-gray-800"
        >
          © {new Date().getFullYear()} MedAlly. All Rights Reserved. A Calonji Company.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
