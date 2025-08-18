import { useEffect, useRef, useState } from 'react';
import { createIntersectionObserver } from '@/lib/utils/performance';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for lazy loading components when they enter the viewport
 */
export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = '50px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = createIntersectionObserver(
      entries => {
        const [entry] = entries;
        if (!entry) return;

        const isVisible = entry.isIntersecting;

        setIsIntersecting(isVisible);

        if (isVisible && triggerOnce && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (observer) {
      observer.observe(element);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  const shouldLoad = triggerOnce
    ? isIntersecting || hasTriggered
    : isIntersecting;

  return { ref, isIntersecting, shouldLoad };
};
