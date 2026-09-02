import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  viewOptions?: UseInViewOptions;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.7,
  viewOptions = { once: true, margin: "-10% 0px" }
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewOptions);

  const getInitialX = () => {
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  };

  const getInitialY = () => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: getInitialX(),
        y: getInitialY()
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 80,
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1]
              }
            }
          : {}
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal: React.FC<{ text: string; className?: string; delay?: number }> = ({
  text,
  className = "",
  delay = 0
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const words = text.split(" ");

  return (
    <h1 ref={ref} className={`${className} overflow-hidden flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-1">
          <motion.span
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + (i * 0.05),
              ease: [0.16, 1, 0.3, 1]
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
};
