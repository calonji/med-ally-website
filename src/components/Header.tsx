import { type FC, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Info,
  Settings,
  Star,
  BarChart,
  Calculator,
  HelpCircle,
  Menu,
  MessageSquare,
} from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scroll to hide menu
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Navigation links - updated to use dedicated URLs
  const navLinks = [
    { name: 'About Us', href: '/about-us', icon: <Info className="w-4 h-4" /> },
    {
      name: 'How It Works',
      href: '/how-it-works',
      icon: <Settings className="w-4 h-4" />,
    },
    { name: 'Features', href: '/features', icon: <Star className="w-4 h-4" /> },
    { name: 'Benefits', href: '/benefits', icon: <BarChart className="w-4 h-4" /> },
    {
      name: 'ROI Calculator',
      href: '/roi-calculator',
      icon: <Calculator className="w-4 h-4" />,
    },
    { name: 'FAQ', href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 w-full shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 origin-left w-full"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Tagline */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center focus:outline-none"
              aria-label="Go to homepage"
            >
              <Logo className="h-10 w-auto" />
              <div className="ml-2 flex flex-col items-start">
                <span className="text-xl font-semibold text-gray-900">MedAlly</span>
                <span className="text-xs text-gray-600">Simplify Workflows. Empower Care.</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                className={`text-sm ${
                  location.pathname === link.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => navigate(link.href)}
              >
                {link.name}
              </Button>
            ))}
            <a 
              href="https://app.medally.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-md shadow-sm transition-colors duration-200"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="mobile-menu md:hidden bg-white border-t border-gray-200 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-2 px-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className={`w-full justify-start text-left mb-1 ${
                  location.pathname === link.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => {
                  navigate(link.href);
                  setIsMenuOpen(false);
                }}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </Button>
            ))}
            <div className="mt-4">
              <a 
                href="https://app.medally.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 hover:text-white rounded-md shadow-sm transition-colors duration-200"
              >
                Join Now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
