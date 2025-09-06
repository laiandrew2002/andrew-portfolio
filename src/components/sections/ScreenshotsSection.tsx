'use client';

import { memo } from 'react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ScreenshotsSectionProps {
  screenshots: Screenshot[];
  className?: string;
}

const ScreenshotsSection = memo<ScreenshotsSectionProps>(
  ({ screenshots, className }) => {
    return (
      <div className={`mt-6 flex flex-col flex-wrap gap-4 ${className || ''}`}>
        {screenshots.map((screenshot, index) => (
          <Image
            key={index}
            src={screenshot.src}
            alt={screenshot.alt}
            className="rounded-md"
            layout="responsive"
            width={screenshot.width || 16}
            height={screenshot.height || 9}
          />
        ))}
      </div>
    );
  }
);

ScreenshotsSection.displayName = 'ScreenshotsSection';

export default ScreenshotsSection;
