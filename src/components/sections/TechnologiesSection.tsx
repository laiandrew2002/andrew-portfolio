'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';

interface Technology {
  name: string;
  image: string;
  link: string;
}

interface TechnologiesSectionProps {
  technologies: Technology[];
  className?: string;
}

const TechnologiesSection = memo<TechnologiesSectionProps>(
  ({ technologies, className }) => {
    return (
      <FadeInStagger
        className={`mt-6 flex flex-wrap gap-4 ${className || ''}`}
        faster
        once
      >
        {technologies.map(({ name, image, link }) => (
          <FadeIn key={name} className="flex w-24 flex-col self-start">
            <div className="mt-auto">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image}
                  className="m-auto rounded-md object-contain"
                  alt={`${name} logo`}
                  height={64}
                  width={64}
                  style={{
                    width: 64,
                    height: 64,
                  }}
                />
                <h4 className="m-2 mx-auto w-min px-2 text-center text-sm font-semibold tracking-tight text-gray-500">
                  {name}
                </h4>
              </Link>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    );
  }
);

TechnologiesSection.displayName = 'TechnologiesSection';

export default TechnologiesSection;
