import { type FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from '@/pages/LandingPage';

const App: FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen w-full bg-background">
        <LandingPage />
      </div>
    </HelmetProvider>
  );
};

export default App;
