'use client';

import { memo } from 'react';
import { useAnimationControls } from 'framer-motion';
import { FadeInStagger } from '../FadeIn';
import { SKILLS } from '@/lib/constants/skills';
import { SkillGrid } from '../features';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection = memo<SkillsSectionProps>(({ className }) => {
  const controls = useAnimationControls();
  const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });

  return (
    <div ref={ref} className={`container ${className || ''}`}>
      {shouldLoad ? (
        <FadeInStagger
          faster
          animate={controls}
          className="relative z-10 mt-20 flex flex-col gap-4"
        >
          <SkillGrid skills={SKILLS} />
        </FadeInStagger>
      ) : (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
    </div>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
