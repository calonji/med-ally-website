import { type FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links - updated to use dedicated URLs
  const navLinks = [
    { name: 'About', href: '/about-us', icon: <Info className="w-4 h-4" /> },
    {
      name: 'How It Works',
      href: '/how-it-works',
      icon: <Settings className="w-4 h-4" />,
    },
    { name: 'Features', href: '/features', icon: <Star className="w-4 h-4" /> },
    { name: 'Benefits', href: '/benefits', icon: <BarChart className="w-4 h-4" /> },
    {
      name: 'ROI',
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

  const isHome = location.pathname === '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-center transition-all duration-300 ${scrolled ? 'pt-3 sm:pt-5' : 'pt-0'
        }`}
      initial={isHome ? { y: -100, opacity: 0 } : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        isHome
          ? { type: 'spring', stiffness: 75, damping: 22 }
          : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
      }
    >
      <div
        className={`relative w-full max-w-7xl mx-auto px-4 transition-all duration-300 flex justify-center ${scrolled ? 'px-6' : 'px-4'
          }`}
      >
        <div
          className={`flex w-full items-center justify-between gap-4 md:gap-8 transition-all duration-300 border ${scrolled
            ? 'rounded-full border-border glass-medally px-6 py-2.5 max-w-6xl'
            : 'rounded-none border-transparent bg-transparent border-b-border/30 px-4 py-5'
            }`}
        >
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-3 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-label="Go to homepage"
            >
              <span
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-border bg-muted/50 transition duration-300 group-hover:scale-105"
              >
                <Logo className="h-7 w-7 transition duration-300 group-hover:rotate-12" />
              </span>
              <div className="flex flex-col items-start leading-none">
                <span className="text-lg font-bold tracking-tight text-foreground">MedAlly</span>
                <span className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-[0.22em] text-primary lg:block">
                  Clinical AI
                </span>
              </div>
            </button>
          </div>

          <nav
            className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/30 px-1.5 py-1.5 xl:flex backdrop-blur-md"
          >
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="sm"
                className={`rounded-full px-4 text-sm font-medium transition-all duration-300 ${location.pathname === link.href
                  ? 'bg-foreground/10 text-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                onClick={() => navigate(link.href)}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-full border border-border bg-muted/40 text-foreground hover:bg-muted transition-all duration-300 flex items-center justify-center p-0"
              aria-label="Toggle light and dark theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-[1.1rem] w-[1.1rem] text-yellow-400 animate-spin-slow shrink-0" />
              ) : (
                <Moon className="h-[1.1rem] w-[1.1rem] text-slate-600 dark:text-slate-400 shrink-0" />
              )}
            </Button>
            <a
              href="https://www.calonji.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-muted/40 px-5 text-sm font-semibold text-foreground transition hover:bg-muted hover:scale-[1.02] active:scale-95"
            >
              Demo
            </a>
            <a
              href="https://app.medally.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-[#36b7b5] to-[#2da19f] px-5 text-sm font-bold text-slate-950 dark:text-white shadow-md shadow-teal-500/10 hover:shadow-teal-500/25 transition hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
            >
              Join now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-10 w-10 rounded-full border border-border bg-muted/40 text-foreground hover:bg-muted transition-all duration-300 flex items-center justify-center p-0"
              aria-label="Toggle light and dark theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-[1.1rem] w-[1.1rem] text-yellow-400 shrink-0" />
              ) : (
                <Moon className="h-[1.1rem] w-[1.1rem] text-slate-600 dark:text-slate-400 shrink-0" />
              )}
            </Button>
            <Button
              variant="ghost"
              className="h-10 rounded-full px-4 border border-border bg-muted/40 text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="mr-2 h-4 w-4 text-foreground/70" />
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-4 right-4 mt-2 rounded-3xl border border-border glass-medally shadow-2xl shadow-foreground/5 xl:hidden overflow-hidden z-50"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid gap-1 p-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className={`mb-1 w-full justify-start rounded-2xl text-left h-12 ${location.pathname === link.href
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                onClick={() => {
                  navigate(link.href);
                  setIsMenuOpen(false);
                }}
              >
                <span className="mr-3 text-primary">{link.icon}</span>
                {link.name}
              </Button>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://app.medally.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-foreground text-background font-bold shadow-md hover:opacity-90 transition"
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
