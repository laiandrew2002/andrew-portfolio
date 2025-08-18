'use client';

import { memo } from 'react';
import { PROJECTS } from '@/lib/constants/projects';
import { ProjectCard } from '../features';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = memo<ProjectsSectionProps>(({ className }) => {
  const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`@container relative z-10 mt-20 ${className || ''}`}
    >
      {shouldLoad ? (
        <div className="3xl:grid-cols-2 grid grid-cols-1 gap-8 pt-10">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
    </div>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
