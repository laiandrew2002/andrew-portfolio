'use client';

import { lazy, Suspense } from 'react';
import Container from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import Socials from '@/components/Socials';
import { BackgroundLines } from '@/components/ui/background-lines';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import Border from '@/components/Border';
import { Archive, BookOpen, BriefCase, Envelope } from '@/icons';

// Dynamic imports for section components
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
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

// Helper function to render icons
const renderIcon = (iconType: string) => {
  switch (iconType) {
    case 'briefcase':
      return (
        <>
          <BriefCase height="28" width="28" />
          <span className="icon-blur absolute inset-0 -z-10 bg-work_experience_orange"></span>
        </>
      );
    case 'book':
      return (
        <>
          <BookOpen height="28" width="28" />
          <span className="icon-blur absolute inset-0 -z-10 bg-skills_purple"></span>
        </>
      );
    case 'archive':
      return (
        <>
          <Archive height="28" width="28" />
          <span className="icon-blur absolute inset-0 -z-10 bg-my_work_yellow"></span>
        </>
      );
    case 'envelope':
      return (
        <>
          <Envelope height="28" width="28" />
          <span className="icon-blur absolute inset-0 -z-10 bg-blue-400"></span>
        </>
      );
    default:
      return null;
  }
};

// Helper function to render descriptions
const renderDescription = (type: string) => {
  switch (type) {
    case 'work-experience':
      return (
        <div>
          <span className="text-work_experience_orange">
            Senior Software Engineer
          </span>{' '}
          with <span className="text-work_experience_orange">5+ years</span> of
          experience in the software industry
        </div>
      );
    case 'skills':
      return (
        <div>
          <span className="text-skills_purple">Full Stack</span> software
          engineer with experience in{' '}
          <span className="text-skills_purple">Front-End</span> and{' '}
          <span className="text-skills_purple">Back-End</span> technologies
        </div>
      );
    case 'projects':
      return (
        <div>
          My <span className="text-my_work_yellow">top projects</span> as a full
          stack <span className="text-my_work_yellow">web</span> software
          engineer
        </div>
      );
    case 'contact':
      return (
        <div>
          Let&apos;s <span className="text-blue-400">talk</span> and{' '}
          <span className="text-blue-400">work together</span>
        </div>
      );
    default:
      return null;
  }
};

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'My Work', id: 'my-work' },
  { index: 4, title: 'Contact Me', id: 'contact' },
];

export default function Home() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      {/* Hero Section */}
      <Section id={sections[0]?.id || 'about-me'}>
        <Container>
          <BackgroundLines className="relative min-h-screen">
            <FadeIn className="max-w-5xl pt-60 md:pt-[20vh] 2xl:pt-[30vh]">
              <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center text-4xl font-bold tracking-tight text-transparent md:py-10 md:text-7xl lg:text-7xl dark:from-neutral-600 dark:to-white">
                Andrew Lai
              </h2>
              <p className="text-md mx-auto max-w-xl text-center text-neutral-700 md:text-lg dark:text-neutral-400">
                Software engineer with a 5-year experience in Front-End and
                Back-End technologies.
              </p>
            </FadeIn>
            <div className="mouse"></div>
            <Socials className="items-center justify-center" />
          </BackgroundLines>
          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <AboutSection />
          </Suspense>
        </Container>
      </Section>

      {/* Main Content Sections */}
      <div id="stars-container" className="relative">
        <Container>
          {/* Work Experience Section */}
          <Section id="work-experience" className="mt-28 pt-24">
            <Border />
            <SectionHeader
              icon={renderIcon('briefcase')}
              title="Work Experience"
              description={renderDescription('work-experience')}
            />
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <WorkExperienceSection />
            </Suspense>
          </Section>

          {/* Skills Section */}
          <Section id="skills" className="mt-28 pt-24">
            <Border />
            <SectionHeader
              icon={renderIcon('book')}
              title="Skills"
              description={renderDescription('skills')}
            />
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <SkillsSection />
            </Suspense>
          </Section>

          {/* Projects Section */}
          <Section id="my-work" className="mt-28 pt-24">
            <Border />
            <SectionHeader
              icon={renderIcon('archive')}
              title="My Work"
              description={renderDescription('projects')}
            />
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <ProjectsSection />
            </Suspense>
          </Section>

          {/* Contact Section */}
          <Section id="contact" className="mt-28 pt-24">
            <Border />
            <SectionHeader
              icon={renderIcon('envelope')}
              title="Contact Me"
              description={renderDescription('contact')}
            />
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <ContactSection />
            </Suspense>
          </Section>
        </Container>
      </div>
    </div>
  );
}
