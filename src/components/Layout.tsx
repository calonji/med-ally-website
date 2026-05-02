import { type FC, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="dark flex min-h-screen flex-col bg-black text-white">
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
