import { type FC, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Logo } from '@/components/ui/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Info, Settings, Star, BarChart, Calculator, 
  FileText, HelpCircle, Menu, X, MessageSquare,
  Stethoscope
} from 'lucide-react';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Handle initial path on page load
  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading slash
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          // Update URL without triggering navigation
          const newPath = entry.target.id === 'hero' ? '/' : `/${entry.target.id}`;
          window.history.replaceState(null, '', newPath);
        }
      }),
      { rootMargin: '-50% 0px', threshold: 0 }
    );
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Update scrollToSection function
  const scrollToSection = useCallback((sectionId: string) => {
    // First close the menu to prevent layout shifts
    setIsMenuOpen(false);
    
    // Remove the leading # if present
    const targetId = sectionId.replace('#', '');
    
    // Small delay to allow menu close animation to complete
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = window.scrollY + elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without hash
        navigate(`/${targetId}`, { replace: true });
      }
    }, 100);
  }, [navigate]);

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
    { name: 'About Us', href: 'about-us', icon: <Info className="w-4 h-4" /> },
    { name: 'How It Works', href: 'how-it-works', icon: <Settings className="w-4 h-4" /> },
    { name: 'Features', href: 'features', icon: <Star className="w-4 h-4" /> },
    { name: 'Benefits', href: 'benefits', icon: <BarChart className="w-4 h-4" /> },
    // { name: 'Case Studies', href: 'case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: 'ROI Calculator', href: 'roi-calculator', icon: <Calculator className="w-4 h-4" /> },
    { name: 'FAQ', href: 'faq', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Pricing', href: 'pricing', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4">
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
              <motion.a
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center px-2 py-1 rounded-full text-sm transition-all cursor-pointer ${
                  activeSection === item.href
                    ? 'text-blue-600 font-medium bg-blue-50 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.span className="mr-1.5" whileHover={{ rotate: 360 }}>
                  {item.icon}
                </motion.span>
                {item.name}
              </motion.a>
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
              <Button 
                className="text-sm px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500"
              >
                Get Started Free
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            aria-label="Toggle menu"
            className="lg:hidden p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          aria-label="mobile-nav"
          id="mobile-nav"
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  scrollToSection(item.href);
                }}
                className={`flex items-center w-full px-4 py-2 rounded-lg text-left ${
                  activeSection === item.href
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
