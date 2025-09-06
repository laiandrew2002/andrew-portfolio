'use client';

import { memo } from 'react';

interface FeaturesSectionProps {
  features: string[];
  className?: string;
}

const FeaturesSection = memo<FeaturesSectionProps>(
  ({ features, className }) => {
    return (
      <div className={className}>
        <ul className="mt-1 list-disc pl-6 text-gray-500">
          {features.map((feature, index) => (
            <li key={index} className="text-md py-1">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
