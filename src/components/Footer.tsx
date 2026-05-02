import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Youtube, Instagram, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Site navigation plus parent-company policy/contact resources.
  const quickLinks = [
    { name: 'About Us', path: '/about-us', isExternal: false },
    { name: 'How It Works', path: '/how-it-works', isExternal: false },
    { name: 'Features', path: '/features', isExternal: false },
    { name: 'Benefits', path: '/benefits', isExternal: false },
    { name: 'ROI Calculator', path: '/roi-calculator', isExternal: false },
    { name: 'FAQ', path: '/faq', isExternal: false },
    { name: 'Pricing', path: '/pricing', isExternal: false },
    { name: 'Calonji Website', path: 'https://www.calonji.com/', isExternal: true },
    { name: 'Blog', path: 'https://www.calonji.com/blog', isExternal: true },
    { name: 'MedAlly App', path: 'https://app.medally.ai/', isExternal: true },
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pb-8 pt-16 text-slate-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(54,183,181,0.16),transparent_34rem),radial-gradient(circle_at_82%_20%,rgba(166,244,225,0.08),transparent_30rem)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[1.15fr_1.1fr_0.9fr]">
          {/* About MedAlly */}
          <motion.div {...fadeInUp} className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-100/65">Clinical AI platform</p>
            <h3 className="text-2xl font-bold text-white">MedAlly</h3>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              MedAlly helps physicians and practice leaders connect AI clinical documentation,
              decision support, follow-up, and medical coding context in one reviewable workflow.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100/20 bg-teal-200/10 px-4 py-2 text-xs font-semibold text-teal-100">
              <ShieldCheck className="h-4 w-4" />
              HIPAA-aware physician review workflows
            </div>
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
                      className="flex items-center text-sm text-slate-400 transition-colors hover:text-teal-100"
                    >
                      {link.name}
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 transition-colors hover:text-teal-100"
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
            <p className="text-sm leading-7 text-slate-400">
              MedAlly is a product of Calonji, Inc. a company committed to building innovative,
              human-centered solutions that leverage AI and technology to solve real-world
              challenges in healthcare and beyond.
            </p>
          </motion.div>
        </div>

        {/* Full-width Waitlist Button */}
        <motion.div {...fadeInUp} className="border-t border-white/10 py-8">
          <a 
            href="https://app.medally.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block w-full rounded-lg border border-teal-100/20 bg-white/[0.06] py-6 text-lg font-semibold text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-100/50 hover:bg-teal-200/10 hover:text-white"
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
          className="flex justify-center space-x-6 border-t border-white/10 py-8"
        >
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 transition-colors hover:text-teal-100"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...fadeInUp}
          className="border-t border-white/10 pt-4 text-center text-sm text-slate-500"
        >
          © {new Date().getFullYear()} MedAlly. All Rights Reserved. A Calonji Company.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
