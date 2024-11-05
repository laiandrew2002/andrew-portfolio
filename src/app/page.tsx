import AboutMe from "@/components/AboutMe";
import Border from "@/components/Border";
import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Socials from "@/components/Socials";
import WorkExperience from "@/components/WorkExperience";
import { BriefCase } from "@/icons";

export const sections = [
  { index: 0, title: 'About Me', id: 'about-me' },
  { index: 1, title: 'Work Experience', id: 'work-experience' },
  { index: 2, title: 'Skills', id: 'skills' },
  { index: 3, title: 'My Work', id: 'my-work' },
  { index: 4, title: 'Contact Me', id: 'contact' },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: 'Work Experience',
      description: (
        <div>
          <span className="text-work_experience_orange">Senior Software Engineer</span> with <span className="text-work_experience_orange">5+ years</span> of experience in the software industry
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl mb-6">
                Andrew Lai<span className="pl-4 wave">👋</span>
              </h1>
              <p className="max-w-3xl">
                Software engineer with a 5 years experience in Front-End and Back-End technologies.
              </p>
            </FadeIn>
            <Socials />
            <div className="scroll-down">
              <span></span>
              <span></span>
            </div>
          </div>
          <AboutMe />
        </Container>
      </Section>
      <div id="stars-container" className="relative">
        <Container>
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id} className="pt-24 mt-28">
              <Border />
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}
