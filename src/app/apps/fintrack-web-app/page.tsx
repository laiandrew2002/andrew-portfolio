import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Border from "@/components/Border";
import Section from "@/components/Section";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import Button from "@/components/Button";
import Link from "next/link";
import { ChallengeIcon, PictureIcon, TechnologiesIcon } from "@/icons";
import AppPageHeader from "@/components/CollapsableMenu/components/AppPageHeader";
import { TbCircleKeyFilled } from "react-icons/tb";

export const sections = [
  { index: 0, title: "About", id: "about" },
  { index: 1, title: "Features", id: "features" },
  { index: 3, title: "Challenges", id: "keyOutcomes" },
  { index: 4, title: "Screenshots", id: "screenshots" },
  { index: 5, title: "Technologies", id: "technologies" },
];

const fintrackWebAppTech = [
  {
    name: "Next.js",
    image: "/logos/nextjs-logo.png",
    link: "https://nextjs.org/",
  },
  {
    name: "Zustand",
    image: "/logos/zustand-logo.png",
    link: "https://zustand.js.org/",
  },
  {
    name: "React Query",
    image: "/logos/react-query-logo.png",
    link: "https://react-query.tanstack.com/",
  },
  {
    name: "Tailwind CSS",
    image: "/logos/tailwindcss-logo.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Shadcn UI",
    image: "/logos/shadcn-logo.png",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Hono.js",
    image: "/logos/hono-logo.png",
    link: "https://honojs.dev/",
  },
  {
    name: "Drizzle ORM",
    image: "/logos/drizzle-logo.png",
    link: "https://drizzle.org/",
  },
  {
    name: "PostgreSQL",
    image: "/logos/postgres-logo.png",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Google Generative AI",
    image: "/logos/google-ai-logo.png",
    link: "https://cloud.google.com/generative-ai",
  },
];

const FinTrackWebApp = () => {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Container>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <div className="flex flex-col justify-center gap-4 pt-20 pb-20">
                  <h1 className="text-3xl font-bold">
                    FinTrack Expenses & Incomes Tracker Web Application
                  </h1>
                  <p className="text-lg text-gray-500">
                    This finance tracker application provides users with a
                    comprehensive summary of their financial data, including
                    income, expenses, and savings. Users has the ability to
                    enter the transactions manually, import transactions from
                    CSV files, or connect their bank accounts to automatically
                    import transactions. The application also provides
                    personalized financial advice based on the user&rsquo;s
                    financial data.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">Industry</dt>
                      <dd>Finance</dd>
                    </div>
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">
                        Developed In
                      </dt>
                      <dd>2024</dd>
                    </div>
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">
                        Project Type
                      </dt>
                      <dd>Personal</dd>
                    </div>
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">Service</dt>
                      <dd>Web Application</dd>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Button
                      className="flex items-center gap-x-2"
                      variant="secondary"
                      arrow="right"
                    >
                      <Link
                        href="https://finance-tracker-pied-tau.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <Border className="pt-10" />

        <FadeIn>
          <Section id="features">
            <div className="flex flex-col pt-10 mb-20">
              <AppPageHeader
                icon={<ChallengeIcon width="28" height="28" />}
                title="Features"
              />
              <ul className="list-disc pl-6 mt-1 text-gray-500">
                <li className="text-md py-1">
                  Built with Next.js on the frontend, Hono.js on the backend,
                  and PostgreSQL for database.
                </li>
                <li className="text-md py-1">
                  It provides daily personalized financial advice based on the
                  user&rsquo;s financial data.
                </li>
                <li className="text-md py-1">
                  It provides an overview of the user&rsquo;s financial data,
                  including income, expenses, and savings with charts and
                  graphs.
                </li>
                <li className="text-md py-1">
                  Users can enter transactions manually, import transactions
                  from CSV files, or connect their bank accounts to
                  automatically import transactions.
                </li>
                <li className="text-md py-1">
                  Users are able create multiple accounts and categories to
                  organize their financial data.
                </li>
              </ul>
            </div>
          </Section>

          <Border className="pt-10" />

          <Section id="keyOutcomes">
            <div className="flex flex-col pt-10 mb-20">
              <AppPageHeader
                icon={<TbCircleKeyFilled size={28} fill="#ed8864" />}
                title="Challenges"
              />
              <ul className="list-disc pl-6 mt-1 text-gray-500">
                <li className="text-md py-1">
                  Learning to use new frameworks and libraries like Hono.js and
                  Drizzle ORM.
                </li>
                <li className="text-md py-1">
                  Designing the database schema and fully utilizing Drizzle ORM
                  to interact with the database.
                </li>
                <li className="text-md py-1">
                  Implementing Google Generative AI to generate personalized
                  financial advice based on the user&rsquo;s financial data.
                </li>
              </ul>
            </div>
          </Section>

          <Border className="pt-10" />

          <Section id="screenshots">
            <div className="flex flex-col pt-10">
              <AppPageHeader
                icon={<PictureIcon width="28" height="28" fill="white" />}
                title="Screenshots"
              />
              <div className="flex flex-col gap-4 mt-6 mb-20 flex-wrap">
                <Image
                  src="/projects/finance-1.png"
                  alt="fintrack-web-app-1"
                  className="rounded-md"
                  layout="responsive"
                  width={16} // Aspect ratio width
                  height={9}
                />
                <Image
                  src="/projects/finance-2.png"
                  alt="fintrack-web-app-2"
                  className="rounded-md"
                  layout="responsive"
                  width={16} // Aspect ratio width
                  height={9}
                />
              </div>
            </div>
          </Section>

          <Border className="pt-10" />

          <Section id="technologies">
            <div className="flex flex-col pt-10">
              <AppPageHeader
                icon={<TechnologiesIcon width="28" height="28" fill="white" />}
                title="Technologies"
              />
              <FadeInStagger
                className="flex gap-4 mt-6 mb-10 flex-wrap"
                faster
                once
              >
                {fintrackWebAppTech.map(({ name, image, link }) => (
                  <FadeIn key={name} className="w-24 flex flex-col self-start">
                    <div className="mt-auto">
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={image}
                          className="object-contain rounded-md m-auto"
                          alt={`${name} logo`}
                          height={64}
                          width={64}
                          style={{
                            width: 64,
                            height: 64,
                          }}
                        />
                        <h4 className="text-sm font-semibold tracking-tight text-gray-500 text-center w-min px-2 m-2 mx-auto">
                          {name}
                        </h4>
                      </Link>
                    </div>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </div>
          </Section>
        </FadeIn>
      </Container>
    </div>
  );
};

export default FinTrackWebApp;
