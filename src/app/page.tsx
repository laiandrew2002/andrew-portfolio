import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import Section from "@/components/Section";
// import Image from "next/image";

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
      <Section id={sections[0].id}>
        <Container>
          <div className="min-h-screen relative">
            <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Andrew Lai<span className="wave">👋</span>
              </h1>
              <p className="max-w-3xl">
                Software engineer with a 5 years experience in Front-End and Back-End technologies.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  );
}
