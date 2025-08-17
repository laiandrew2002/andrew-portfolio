'use client';

import { PROJECTS } from '@/lib/constants/projects';
import { ProjectCard } from '../features';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = ({ className }: ProjectsSectionProps) => {
  return (
    <div className={`@container relative z-10 mt-20 ${className || ''}`}>
      <div className="3xl:grid-cols-2 grid grid-cols-1 gap-8 pt-10">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
