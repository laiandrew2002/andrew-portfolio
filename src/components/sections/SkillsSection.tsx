'use client';

import { useAnimationControls } from 'framer-motion';
import { FadeInStagger } from '../FadeIn';
import { SKILLS } from '@/lib/constants/skills';
import { SkillGrid } from '../features';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection = ({ className }: SkillsSectionProps) => {
  const controls = useAnimationControls();

  return (
    <div className={`container ${className || ''}`}>
      <FadeInStagger
        faster
        animate={controls}
        className="relative z-10 mt-20 flex flex-col gap-4"
      >
        <SkillGrid skills={SKILLS} />
      </FadeInStagger>
    </div>
  );
};

export default SkillsSection;
