import { FadeIn, FadeInStagger } from '../FadeIn';
import { WORK_EXPERIENCE } from '@/lib/constants/workExperience';
import { ExperienceTimeline } from '../features';

interface WorkExperienceSectionProps {
  className?: string;
}

const WorkExperienceSection = ({ className }: WorkExperienceSectionProps) => {
  return (
    <div
      className={`container relative z-10 mt-24 text-gray-500 ${className || ''}`}
    >
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="absolute bottom-0 top-0 border-l border-gray-500/30"></div>
      </FadeIn>
      <FadeInStagger>
        <ExperienceTimeline experiences={WORK_EXPERIENCE} />
      </FadeInStagger>
    </div>
  );
};

export default WorkExperienceSection;
