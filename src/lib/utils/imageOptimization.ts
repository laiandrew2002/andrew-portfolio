/**
 * Image optimization utilities
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

/**
 * Generate optimized image sizes for responsive images
 */
export const generateImageSizes = (breakpoints: Record<string, number>) => {
  return (
    Object.entries(breakpoints)
      .map(
        ([, value]) => `(max-width: ${value}px) ${Math.floor(value * 0.9)}px`
      )
      .join(', ') + ', 100vw'
  );
};

/**
 * Default responsive image sizes
 */
export const DEFAULT_IMAGE_SIZES = generateImageSizes({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
});

/**
 * Generate blur data URL for placeholder
 */
export const generateBlurDataURL = (
  width: number = 10,
  height: number = 10
): string => {
  const canvas =
    typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    // Fallback blur data URL
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Create a simple gradient blur effect
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

/**
 * Check if image format is supported
 */
export const isWebPSupported = (): boolean => {
  if (typeof window === 'undefined') return false;

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Get optimized image URL with format fallback
 */
export const getOptimizedImageUrl = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
  } = {}
): string => {
  const { width, height, quality = 85, format } = options;

  // If it's already an optimized URL or external URL, return as is
  if (src.startsWith('http') || src.includes('/_next/image')) {
    return src;
  }

  const params = new URLSearchParams();

  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('q', quality.toString());

  if (format && format === 'webp' && isWebPSupported()) {
    params.set('f', format);
  }

  return `/_next/image?url=${encodeURIComponent(src)}&${params.toString()}`;
};
