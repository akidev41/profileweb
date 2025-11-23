'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ 
  children, 
  direction = 'left', 
  delay = 0,
  className = '',
  threshold = 0.15
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
  });

  const getAnimationClasses = () => {
    // Use transform and opacity for better performance (GPU accelerated)
    const baseClasses = 'transition-all duration-700 ease-out will-change-transform';
    
    if (!inView) {
      // Initial state (hidden)
      switch (direction) {
        case 'left':
          return `${baseClasses} opacity-0 -translate-x-[30px]`;
        case 'right':
          return `${baseClasses} opacity-0 translate-x-[30px]`;
        case 'bottom':
          return `${baseClasses} opacity-0 translate-y-[30px]`;
        case 'top':
          return `${baseClasses} opacity-0 -translate-y-[30px]`;
        default:
          return `${baseClasses} opacity-0 -translate-x-[30px]`;
      }
    } else {
      // Animated state (visible)
      return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    }
  };

  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

