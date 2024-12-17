import { render as testingLibRender, screen, fireEvent } from '@testing-library/react';
import { type PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export const render = (ui: React.ReactElement) => {
  return testingLibRender(ui, { wrapper: AllTheProviders });
};

export { screen, fireEvent }; 