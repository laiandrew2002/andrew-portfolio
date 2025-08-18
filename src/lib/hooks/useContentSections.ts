import { useMemo } from 'react';

// Dynamic imports for sections
import { lazy } from 'react';

const WorkExperienceSection = lazy(
  () => import('@/components/sections/WorkExperienceSection')
);
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const ProjectsSection = lazy(
  () => import('@/components/sections/ProjectsSection')
);
const ContactSection = lazy(
  () => import('@/components/sections/ContactSection')
);

export interface ContentSection {
  id: string;
  sectionHeader: {
    iconType: 'briefcase' | 'book' | 'archive' | 'envelope';
    title: string;
    description: {
      type: 'work-experience' | 'skills' | 'projects' | 'contact';
    };
  };
  mainContent: React.ComponentType;
}

export const useContentSections = () => {
  return useMemo<ContentSection[]>(
    () => [
      {
        id: 'work-experience',
        sectionHeader: {
          iconType: 'briefcase',
          title: 'Work Experience',
          description: {
            type: 'work-experience',
          },
        },
        mainContent: WorkExperienceSection,
      },
      {
        id: 'skills',
        sectionHeader: {
          iconType: 'book',
          title: 'Skills',
          description: {
            type: 'skills',
          },
        },
        mainContent: SkillsSection,
      },
      {
        id: 'my-work',
        sectionHeader: {
          iconType: 'archive',
          title: 'My Work',
          description: {
            type: 'projects',
          },
        },
        mainContent: ProjectsSection,
      },
      {
        id: 'contact',
        sectionHeader: {
          iconType: 'envelope',
          title: 'Contact Me',
          description: {
            type: 'contact',
          },
        },
        mainContent: ContactSection,
      },
    ],
    []
  );
};
