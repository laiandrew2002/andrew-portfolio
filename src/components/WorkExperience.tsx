import clsx from "clsx";
import { default as Image } from "next/image";
import { FadeIn, FadeInStagger } from "./FadeIn";
import Border from "./Border";
import Link from "next/link";
import Pill from "./Pill";

interface ExperienceDescription {
  text: string | React.ReactNode;
  subText?: string[];
}

interface Experience {
  title: string;
  date: string;
  description: ExperienceDescription[];
  image: { url: string; className: string; height: number; width: number };
  tech?: string[];
}

const experience: Experience[] = [
  {
    title: "Cake Group | Software Engineer.",
    date: "April 2021 - Oct 2024",
    description: [
      {
        text: (
          <>
            Spearheaded development and maintenance for high-traffic web
            applications, delivering a seamless user experience across{" "}
            <Link
              href="https://bake.io"
              target="_blank"
              className="text-blue-500 underline"
            >
              Bake website
            </Link>{" "}
            and{" "}
            <Link
              href="https://app.bake.io"
              target="_blank"
              className="text-blue-500 underline"
            >
              Bake web application
            </Link>{" "}
            using React (TypeScript), Redux, and Node.js (Express/TypeScript),
            Postgres Database and Redis.
          </>
        ),
      },
      {
        text: "Enhanced the company admin panel with React Admin and React Query, improving data accessibility for internal teams.",
      },
      {
        text: "Key achievements:",
        subText: [
          "Increased sign up and login rate by 30% by SSO(Facebook/Google/Apple).",
          "Increased security through continuously monitor/upgrade on authentication & authorization flows.",
          "Reduced the KYC processing time by 80% by implementing automation KYC process with third party provider (Sumsub) and Singpass Myinfo for Singapore users.",
          "Developed features to comply with country-specific restrictions, improving platform adaptability for diverse user bases.",
          "Developed a CMS on Admin panel that optimized content delivery speed, enhancing user experience and reducing load times.",
        ],
      },
    ],
    image: {
      url: "/workExperience/cake_logo.jpeg",
      height: 96,
      width: 96,
      className: "",
    },
    tech: [
      "TypeScript",
      "Gatsby",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "React Admin",
      "React Query",
    ],
  },
  {
    title: "Ufinity Pte Ltd | Software Engineer.",
    date: "Nov 2020 - Mar 2021",
    description: [
      {
        text: (
          <>
            Contributed to the{" "}
            <Link
              href="https://www.life.gov.sg/app"
              target="_blank"
              className="text-blue-500 underline"
            >
              LifeSG mobile application
            </Link>{" "}
            (iOS & Android) with React Native (TypeScript), enhancing user
            experience through performance optimization and clean UI design.
          </>
        ),
      },
      {
        text: "Played a pivotal role in agile development, with a focus on TDD and high-quality code production through pair programming.",
      },
      {
        text: "Recognized for delivering programming estimates with high accuracy, enabling efficient resource allocation.",
      },
    ],
    image: {
      url: "/workExperience/ufinity_logo.jpeg",
      height: 96,
      width: 96,
      className: "",
    },
    tech: [
      "JavaScript",
      "TypeScript",
      "React Native",
      "Redux",
      "Node.js",
      "Koa.js",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "DXC Technology | Associate Professional Programmer Analyst.",
    date: "Feb 2019 - Nov 2020",
    description: [
      {
        text: "Involved in the development of the front end of an API gateway using React.js & Redux.",
      },
      {
        text: "Developed a REST API generator using loopback in Node.js",
      },
      {
        text: "Involved in the development of integration of a microservice to provide Singpass OIDC authentication for clients. (Node.js & Express.js).",
      },
    ],
    image: {
      url: "/workExperience/dxc_logo.jpg",
      height: 96,
      width: 96,
      className: "",
    },
    tech: ["JavaScript", "React", "Redux", "Node.js", "Loopback.js", "MySQL"],
  },
];

const WorkExperience = () => {
  return (
    <div className="mt-24 text-gray-500 relative z-10 container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole
            key={index}
            title={item.title}
            date={item.date}
            image={item.image}
          >
            {item.description.map(({ text, subText }, index) => (
              <div key={index} className="py-1">
                <ul className="list-disc pl-4">
                  <li className="text-gray-500 text-md">
                    {typeof text === "string" ? text : text}
                    {subText && subText.length > 0 && (
                      <ul className="list-disc pl-6 mt-1">
                        {subText.map((subTextItem, subIndex) => (
                          <li key={subIndex} className="text-md py-1">
                            {subTextItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            ))}
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {item.tech?.map((tech, index) => (
                <Pill
                  key={index}
                  text={tech}
                  color="text-work_experience_orange"
                  background="bg-work_experience_brown"
                />
              ))}
            </div>
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
};

const WorkRole = ({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) => {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div
            className={clsx(
              "flex-none rounded-md overflow-hidden self-center ml-2 mr-4",
              image.className,
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || "auto",
                height: image.height || "auto",
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">
              {title}
            </p>
            <p className="mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
};

export default WorkExperience;
