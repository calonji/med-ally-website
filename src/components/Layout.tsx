import { type FC, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout; 