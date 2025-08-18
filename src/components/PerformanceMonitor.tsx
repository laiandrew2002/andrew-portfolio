'use client';

import { useEffect } from 'react';
import { measureWebVitals, PerformanceMetrics } from '@/lib/utils/performance';

interface PerformanceMonitorProps {
  onMetric?: (metric: PerformanceMetrics) => void;
  enableLogging?: boolean;
}

const PerformanceMonitor = ({
  onMetric,
  enableLogging = process.env.NODE_ENV === 'development',
}: PerformanceMonitorProps) => {
  useEffect(() => {
    const handleMetric = (metric: PerformanceMetrics) => {
      if (enableLogging) {
        console.log('Performance Metric:', metric);
      }

      onMetric?.(metric);

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Google Analytics, Vercel Analytics, etc.
        // gtag('event', 'web_vitals', metric);
      }
    };

    measureWebVitals(handleMetric);
  }, [onMetric, enableLogging]);

  return null;
};

export default PerformanceMonitor;
