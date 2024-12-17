import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';

// Mock window.scrollTo with proper overloads
window.scrollTo = vi.fn() as unknown as {
  (options?: ScrollToOptions): void;
  (x: number, y: number): void;
};

describe('Header Component', () => {
  it('renders navigation items', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Features/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About Us/i })).toBeInTheDocument();
  });

  it('handles mobile menu toggle', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation', { name: 'mobile-nav' })).toBeVisible();
  });

  it('scrolls to section on nav click', () => {
    render(<Header />);
    const featuresLink = screen.getByRole('link', { name: /Features/i });
    fireEvent.click(featuresLink);
    expect(window.scrollTo).toHaveBeenCalled();
  });
}); 