import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaitlistDialog from './WaitlistDialog';
import { Button } from '@/components/ui/button';

const Footer: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const quickLinks = [{ name: 'Blog', path: '/blog' }];

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

        {/* Full-width Waitlist Button */}
        <motion.div {...fadeInUp} className="py-8 border-t border-gray-800">
          <WaitlistDialog
            trigger={
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold group">
                <span className="flex items-center justify-center">
                  Join the Future of Healthcare
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            }
          />
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
