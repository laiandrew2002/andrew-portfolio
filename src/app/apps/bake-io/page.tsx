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

export const sections = [
  { index: 0, title: "About", id: "about" },
  { index: 1, title: "Features", id: "features" },
  { index: 2, title: "Screenshots", id: "screenshots" },
  { index: 3, title: "Technologies", id: "technologies" },
];

const bakeIoTech = [
  {
    name: "Gatsby.js",
    image: "/logos/gatsby-logo.png",
    link: "https://www.gatsbyjs.com/",
  },
  {
    name: "Redux",
    image: "/logos/redux-logo.png",
    link: "https://redux.js.org/",
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
];

const BakeIo = () => {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Container>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <div className="flex flex-col justify-center gap-4 pt-20 pb-20">
                  <h1 className="text-3xl font-bold">Bake.io</h1>
                  <p className="text-lg text-gray-500">
                    A static website built with Gatsby.js to allow new users to
                    browse through Bake products and services.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">Industry</dt>
                      <dd>Cryptocurrency & Decentralized Finance</dd>
                    </div>
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">
                        Developed In
                      </dt>
                      <dd>2020</dd>
                    </div>
                    <div className="px-6 py-4 sm:border-l border-gray-500/20">
                      <dt className="font-semibold text-blue-100">
                        Project Type
                      </dt>
                      <dd>Company</dd>
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
                        href="https://bake.io/"
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
                  Built with Gatsby.js with responsive design and
                  mobile-friendly.
                </li>
                <li className="text-md py-1">
                  It has user friendly carousel cards, videos and good
                  illustrations to showcase the products.
                </li>
                <li className="text-md py-1">
                  Users are able to browse through all products on Bake with
                  comprehensive designs and high-quality images.
                </li>
                <li className="text-md py-1">
                  Users are able to see varies customized crypto bundles created
                  by influencers.
                </li>
                <li className="text-md py-1">
                  It is easy to navigate and use the website.
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
                  src="/work/bake-io-1.png"
                  alt="bake-io-1"
                  className="rounded-md"
                  layout="responsive"
                  width={16} // Aspect ratio width
                  height={9}
                />
                <Image
                  src="/work/bake-io-2.png"
                  alt="bake-io-2"
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
                {bakeIoTech.map(({ name, image, link }) => (
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

export default BakeIo;
