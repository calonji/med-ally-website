import { type FC, type ReactNode } from 'react';

interface MotionProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: Record<string, unknown>;
  role?: string;
  'aria-label'?: string;
  'data-testid'?: string;
}

const MotionComponent: FC<MotionProps> = ({ children, ...props }) => (
  <div data-testid="motion-component" {...props}>
    {children}
  </div>
);

export const motion = {
  div: MotionComponent,
  button: MotionComponent,
  a: MotionComponent,
  nav: MotionComponent,
  span: MotionComponent,
};

export class ScrollProgress {
  current = 0;
}

export const useScroll = () => ({
  scrollYProgress: new ScrollProgress()
});

export const useSpring = (value: unknown) => value;

export const AnimatePresence: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>; 