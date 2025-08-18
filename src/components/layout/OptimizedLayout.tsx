import { memo, ReactNode } from 'react';
import { preloadImages } from '@/lib/utils/imageOptimization';
import { useEffect } from 'react';

interface OptimizedLayoutProps {
  children: ReactNode;
  criticalImages?: string[];
  className?: string;
}

/**
 * Optimized layout component that preloads critical images
 * and provides performance optimizations
 */
const OptimizedLayout = memo<OptimizedLayoutProps>(
  ({ children, criticalImages = [], className }) => {
    useEffect(() => {
      // Preload critical images on component mount
      if (criticalImages.length > 0) {
        preloadImages(criticalImages).catch(console.error);
      }
    }, [criticalImages]);

    return <div className={className}>{children}</div>;
  }
);

OptimizedLayout.displayName = 'OptimizedLayout';

export default OptimizedLayout;
