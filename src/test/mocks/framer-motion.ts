import React, { FC, ReactNode } from 'react';

interface MotionProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: Record<string, unknown>;
  [key: string]: ReactNode | string | (() => void) | Record<string, unknown> | undefined;
}

const MotionComponent = React.forwardRef<HTMLDivElement, MotionProps>((props, ref) => {
  return React.createElement('div', {
    'data-testid': 'motion-component',
    ref,
    ...props
  });
});

export const motion = {
  div: MotionComponent,
  button: MotionComponent,
  a: MotionComponent,
  nav: MotionComponent,
  span: MotionComponent,
};

export const AnimatePresence: FC<{ children: ReactNode }> = ({ children }) => {
  return React.createElement(React.Fragment, null, children);
};

export class ScrollProgress {
  current = 0;
}

export const useScroll = () => ({
  scrollYProgress: new ScrollProgress()
});

export const useSpring = (value: unknown) => value;

// Add any other motion-related mocks as needed 