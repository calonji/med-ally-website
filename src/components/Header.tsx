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
  BookOpen,
} from 'lucide-react';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const isLandingPage = location.pathname === '/';

  // Handle initial path on page load
  useEffect(() => {
    if (isLandingPage) {
      const path = location.pathname.slice(1); // Remove leading slash
      if (path) {
        const element = document.getElementById(path);
        if (element) {
          const headerOffset = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = window.scrollY + elementPosition - headerOffset;

          // Add a small delay to ensure proper scrolling after page load
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    }
  }, [location, isLandingPage]);

  // Intersection Observer setup - only on landing page
  useEffect(() => {
    if (isLandingPage) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
              // Update URL without triggering navigation
              const newPath = entry.target.id === 'hero' ? '/' : `/${entry.target.id}`;
              window.history.replaceState(null, '', newPath);
            }
          }),
        {
          rootMargin: '-64px 0px -90% 0px', // Adjusted rootMargin for better accuracy
          threshold: 0.1, // Added threshold for better detection
        }
      );

      document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }
  }, [isLandingPage]);

  // Update navigation function to handle both scroll and regular navigation
  const handleNavigation = useCallback(
    (path: string) => {
      setIsMenuOpen(false);

      if (isLandingPage) {
        // Scroll behavior on landing page
        const element = document.getElementById(path);
        if (element) {
          const headerOffset = 64; // Adjusted for header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = window.scrollY + elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
        // Regular navigation on other pages
        navigate('/');
        // Add a longer delay to ensure the landing page loads before scrolling
        setTimeout(() => {
          const element = document.getElementById(path);
          if (element) {
            const headerOffset = 64; // Adjusted for header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = window.scrollY + elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 300); // Increased delay for better reliability
      }
    },
    [navigate, isLandingPage]
  );

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      if (nav && !nav.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Navigation items - updated without # in hrefs
  const navItems = [
    { name: 'About Us', href: 'about-us', icon: <Info className="w-4 h-4" />, isScroll: true },
    {
      name: 'How It Works',
      href: 'how-it-works',
      icon: <Settings className="w-4 h-4" />,
      isScroll: true,
    },
    { name: 'Features', href: 'features', icon: <Star className="w-4 h-4" />, isScroll: true },
    { name: 'Benefits', href: 'benefits', icon: <BarChart className="w-4 h-4" />, isScroll: true },
    {
      name: 'ROI Calculator',
      href: 'roi-calculator',
      icon: <Calculator className="w-4 h-4" />,
      isScroll: true,
    },
    { name: 'FAQ', href: 'faq', icon: <HelpCircle className="w-4 h-4" />, isScroll: true },
    {
      name: 'Pricing',
      href: 'pricing',
      icon: <MessageSquare className="w-4 h-4" />,
      isScroll: true,
    },
    { name: 'Blog', href: '/blog', icon: <BookOpen className="w-4 h-4" />, isScroll: false },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 origin-left w-full"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className="flex items-center space-x-1 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 font-display">
                MedAlly
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider -mt-1">
                AI-Powered Healthcare
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                role="link"
                onClick={() => handleNavigation(item.href)}
                className="flex items-center px-2 py-1 rounded-full text-sm transition-all cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                tabIndex={0}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="text-sm px-3 py-1.5 border-2">
                Log In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="text-sm px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
                Get Started Free
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          id="mobile-menu"
          aria-label="mobile-nav"
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg w-full ${
            isMenuOpen ? 'translate-x-0' : 'hidden'
          }`}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (item.isScroll) {
                    handleNavigation(item.href);
                  } else {
                    navigate(item.href);
                  }
                }}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                  activeSection === item.href && isLandingPage && item.isScroll
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </motion.button>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 justify-center">
                Get Started Free
              </Button>
            </div>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
