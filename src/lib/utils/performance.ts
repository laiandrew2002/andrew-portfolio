/**
 * Performance monitoring utilities
 */

// Extend PerformanceEntry for layout shift
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Measure and report Core Web Vitals
 */
export const measureWebVitals = (
  onPerfEntry?: (metric: PerformanceMetrics) => void
) => {
  if (typeof window === 'undefined' || !onPerfEntry) return;

  // Measure FCP (First Contentful Paint)
  const measureFCP = () => {
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      onPerfEntry({ fcp: fcpEntry.startTime });
    }
  };

  // Measure LCP (Largest Contentful Paint)
  const measureLCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          onPerfEntry({ lcp: lastEntry.startTime });
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  };

  // Measure FID (First Input Delay)
  const measureFID = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const eventEntry = entry as PerformanceEventTiming;
          onPerfEntry({
            fid: eventEntry.processingStart - eventEntry.startTime,
          });
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  };

  // Measure CLS (Cumulative Layout Shift)
  const measureCLS = () => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          const layoutEntry = entry as LayoutShift;
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
            onPerfEntry({ cls: clsValue });
          }
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  };

  // Measure TTFB (Time to First Byte)
  const measureTTFB = () => {
    const navigationEntry = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      onPerfEntry({ ttfb });
    }
  };

  // Execute measurements
  measureFCP();
  measureLCP();
  measureFID();
  measureCLS();
  measureTTFB();
};

/**
 * Debounce function for performance optimization
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Intersection Observer hook for lazy loading
 */
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};
