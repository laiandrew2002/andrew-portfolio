import { memo } from 'react';
import { FadeIn, FadeInStagger } from '../FadeIn';
import { WORK_EXPERIENCE } from '@/lib/constants/workExperience';
import { ExperienceTimeline } from '../features';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface WorkExperienceSectionProps {
  className?: string;
}

const WorkExperienceSection = memo<WorkExperienceSectionProps>(
  ({ className }) => {
    const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });
    return (
      <div
        ref={ref}
        className={`container relative z-10 mt-24 text-gray-500 ${className || ''}`}
      >
        {shouldLoad ? (
          <>
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
          </>
        ) : (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" />
          </div>
        )}
      </div>
    );
  }
);

WorkExperienceSection.displayName = 'WorkExperienceSection';

export default WorkExperienceSection;
