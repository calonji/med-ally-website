import { type FC, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300 ${className}`}>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
