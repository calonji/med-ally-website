import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const quickLinks = [{ name: 'Blog', path: '/blog' }];

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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

        {/* Social Media Links */}
        <motion.div
          {...fadeInUp}
          className="flex justify-center space-x-6 py-8 border-t border-gray-800"
        >
          {[
            { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            { Icon: Twitter, href: '#', label: 'Twitter' },
            { Icon: Facebook, href: '#', label: 'Facebook' },
            { Icon: Youtube, href: '#', label: 'YouTube' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
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
