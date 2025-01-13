import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
    vi.mock('framer-motion', () => ({
      motion: {
        nav: (props: any) => <nav {...props} />,
        a: (props: any) => <a {...props} />,
        span: (props: any) => <span {...props} />,
        button: (props: any) => <button {...props} />,
        div: (props: any) => <div {...props} />,
      },
      AnimatePresence: (props: any) => <>{props.children}</>,
    }));
  });

  it('renders navigation items', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  });

  it('handles mobile menu toggle', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation', { name: /mobile-nav/i })).toHaveClass('translate-x-0');
  });

  it('scrolls to section on nav click', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const featuresLink = screen.getByRole('link', { name: /features/i });
    fireEvent.click(featuresLink);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
