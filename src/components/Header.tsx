import { type FC, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Info,
  Settings,
  Star,
  BarChart,
  Calculator,
  HelpCircle,
  Menu,
  MessageSquare,
} from 'lucide-react';

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const isHome = true;

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
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        isHome
          ? 'border-white/10 bg-black/45 shadow-none'
          : 'border-gray-200 bg-white shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left w-full ${
          isHome
            ? 'bg-gradient-to-r from-teal-300 via-white/70 to-violet-300'
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
        }`}
        style={{ scaleX }}
      />
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className={`group flex items-center gap-3 rounded-full border py-1 pl-1 pr-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/70 ${
                isHome
                  ? 'border-white/10 bg-white/[0.06] text-white backdrop-blur-xl'
                  : 'border-slate-200 bg-white text-slate-950'
              }`}
              aria-label="Go to homepage"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 transition ${
                  isHome
                    ? 'bg-white ring-white/20 group-hover:ring-teal-200/60'
                    : 'bg-white ring-slate-200 group-hover:ring-teal-300'
                }`}
              >
                <Logo className="h-8 w-8" />
              </span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-lg font-extrabold tracking-tight">MedAlly</span>
                <span
                  className={`mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.18em] lg:block ${
                    isHome ? 'text-teal-100/70' : 'text-slate-500'
                  }`}
                >
                  Clinical AI
                </span>
              </div>
            </button>
          </div>

          <nav
            className={`hidden items-center gap-1 rounded-full border px-2 py-2 shadow-2xl xl:flex ${
              isHome
                ? 'border-white/10 bg-white/[0.06] shadow-black/25'
                : 'border-slate-200 bg-white shadow-slate-200/60'
            }`}
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                className={`rounded-full px-4 text-sm font-semibold transition ${
                  location.pathname === link.href
                    ? isHome
                      ? 'bg-white/10 text-white'
                      : 'bg-gray-100 text-gray-900'
                    : isHome
                      ? 'text-white/72 hover:bg-white/10 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => navigate(link.href)}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="https://www.calonji.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-bold transition hover:-translate-y-0.5 ${
                isHome
                  ? 'border-white/15 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/10'
                  : 'border-slate-200 bg-white text-slate-950 hover:border-slate-300'
              }`}
            >
              Book demo
            </a>
            <a
              href="https://app.medally.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-extrabold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-teal-50 hover:text-slate-950"
            >
              Join now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="xl:hidden">
            <Button
              variant="ghost"
              className={`menu-button rounded-full px-4 ${
                isHome
                  ? 'border border-white/10 bg-white/[0.06] text-white hover:bg-white/10 hover:text-white'
                  : 'border border-slate-200 bg-white text-slate-950 hover:bg-slate-50'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="mr-2 h-5 w-5" />
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className={`mobile-menu xl:hidden border-t shadow-2xl ${
            isHome ? 'border-white/10 bg-black/95 text-white' : 'border-gray-200 bg-white'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className={`mb-1 w-full justify-start rounded-full text-left ${
                  location.pathname === link.href
                    ? isHome
                      ? 'bg-white/10 text-white'
                      : 'bg-gray-100 text-gray-900'
                    : isHome
                      ? 'text-white/72 hover:bg-white/10 hover:text-white'
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
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-4 text-sm font-extrabold text-slate-950 shadow-sm transition hover:bg-teal-50 hover:text-slate-950"
              >
                Join now
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
