import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { forwardRef, useState, useCallback, memo } from 'react';
import clsx from 'clsx';
import { LoadingSpinner } from './LoadingSpinner';

export interface ImageProps extends Omit<NextImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  showLoadingSpinner?: boolean;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const Image = memo(
  forwardRef<HTMLImageElement, ImageProps>(
    (
      {
        src,
        alt,
        fallbackSrc = '/placeholder-image.svg',
        showLoadingSpinner = true,
        containerClassName,
        className,
        onLoad,
        onError,
        priority = false,
        ...props
      },
      ref
    ) => {
      const [isLoading, setIsLoading] = useState(true);
      const [hasError, setHasError] = useState(false);
      const [currentSrc, setCurrentSrc] = useState(src);

      const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
        onLoad?.();
      }, [onLoad]);

      const handleError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);

        // Try fallback image if available and not already using it
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
          setIsLoading(true);
          setHasError(false);
        }

        onError?.();
      }, [fallbackSrc, currentSrc, onError]);

      return (
        <div className={clsx('relative overflow-hidden', containerClassName)}>
          {/* Loading spinner */}
          {isLoading && showLoadingSpinner && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
              <LoadingSpinner size="md" />
            </div>
          )}

          {/* Error state */}
          {hasError && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 text-zinc-400">
              <div className="text-center">
                <svg
                  className="mx-auto mb-2 h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs">Failed to load image</p>
              </div>
            </div>
          )}

          {/* Actual image */}
          <NextImage
            ref={ref}
            src={currentSrc}
            alt={alt}
            className={clsx(
              'transition-opacity duration-300',
              isLoading ? 'opacity-0' : 'opacity-100',
              className
            )}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            {...props}
          />
        </div>
      );
    }
  )
);

Image.displayName = 'Image';

export { Image };
