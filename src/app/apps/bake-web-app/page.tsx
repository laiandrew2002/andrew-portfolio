import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Border from '@/components/Border';
import Section from '@/components/Section';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import Button from '@/components/Button';
import Link from 'next/link';
import { ChallengeIcon, PictureIcon, TechnologiesIcon } from '@/icons';
import AppPageHeader from '@/components/CollapsableMenu/components/AppPageHeader';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { TbCircleKeyFilled } from 'react-icons/tb';

export const sections = [
  { index: 0, title: 'About', id: 'about' },
  { index: 1, title: 'Features', id: 'features' },
  { index: 2, title: 'Features Owned', id: 'featuresOwned' },
  { index: 3, title: 'Key Outcomes', id: 'keyOutcomes' },
  { index: 4, title: 'Screenshots', id: 'screenshots' },
  { index: 5, title: 'Technologies', id: 'technologies' },
];

const bakeWebAppTech = [
  {
    name: 'React',
    image: '/logos/react-logo.png',
    link: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    image: '/logos/redux-logo.png',
    link: 'https://redux.js.org/',
  },
  {
    name: 'Node.js',
    image: '/logos/nodejs-logo.png',
    link: 'https://nodejs.org/',
  },
  {
    name: 'Express.js',
    image: '/logos/express-logo.png',
    link: 'https://expressjs.com/',
  },
  {
    name: 'PostgreSQL',
    image: '/logos/postgres-logo.png',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'Redis',
    image: '/logos/redis-logo.png',
    link: 'https://redis.io/',
  },
  {
    name: 'Docker',
    image: '/logos/docker-logo.png',
    link: 'https://www.docker.com/',
  },
];

const BakeWebApp = () => {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Container>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <div className="flex flex-col justify-center gap-4 pb-20 pt-20">
                  <h1 className="text-3xl font-bold">Bake Wep Application</h1>
                  <p className="text-lg text-gray-500">
                    A web application built with React.js and Redux to allow
                    users to use Bake products and services. The backend of the
                    products and services are running on Node.js. with
                    PostgreSQL and Redis.
                  </p>

                  <div className="flex flex-col gap-2">
                    <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                      <dt className="font-semibold text-blue-100">Industry</dt>
                      <dd>Cryptocurrency & Decentralized Finance</dd>
                    </div>
                    <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                      <dt className="font-semibold text-blue-100">
                        Developed In
                      </dt>
                      <dd>2020</dd>
                    </div>
                    <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                      <dt className="font-semibold text-blue-100">
                        Project Type
                      </dt>
                      <dd>Company</dd>
                    </div>
                    <div className="border-gray-500/20 px-6 py-4 sm:border-l">
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
                        href="https://app.bake.io"
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
            <div className="mb-20 flex flex-col pt-10">
              <AppPageHeader
                icon={<ChallengeIcon width="28" height="28" />}
                title="Features"
              />
              <ul className="mt-1 list-disc pl-6 text-gray-500">
                <li className="text-md py-1">
                  Built with React with Redux on the frontend, Node.js with
                  Express on the backend and PostgreSQL and Redis for database.
                </li>
                <li className="text-md py-1">
                  It provides flexible staking, fixed staking, liquidity mining
                  products and services for users to earn rewards and yield on
                  various crypto assets.
                </li>
                <li className="text-md py-1">
                  Users are able to view all their assets and rewards on the
                  platform with a simple and intuitive interface like charts and
                  graphs.
                </li>
                <li className="text-md py-1">
                  Users can also views all transactions history and do tax
                  report export.
                </li>
              </ul>
            </div>
          </Section>

          <Border className="pt-10" />

          <Section id="featuresOwned">
            <div className="mb-20 flex flex-col pt-10">
              <AppPageHeader
                icon={<MdOutlineFeaturedPlayList size={28} fill="#41d985" />}
                title="Features Owned and Implemented"
              />
              <ul className="mt-1 list-decimal pl-6 text-gray-500">
                <li className="text-md py-1">
                  <h3 className="font-bold">Onboarding Process</h3>
                  <ul className="mt-1 list-disc pl-6 text-gray-500">
                    <li className="text-md py-1">
                      Designed and implemented sign-up and login workflows for
                      seamless user onboarding.
                    </li>
                    <li className="text-md py-1">
                      Integrated Single Sign-On (SSO) functionality (Google,
                      Apple, etc.), ensuring a secure and streamlined user
                      registration process.
                    </li>
                    <li className="text-md py-1">
                      Worked across frontend and backend, ensuring smooth
                      communication and secure data handling.
                    </li>
                  </ul>
                </li>
                <li className="text-md py-1">
                  <h3 className="font-bold">KYC (Know Your Customer) Flows</h3>
                  <ul className="mt-1 list-disc pl-6 text-gray-500">
                    <li className="text-md py-1">
                      Developed and launched new KYC flows in collaboration with
                      the third-party provider Sumsub.
                    </li>
                    <li className="text-md py-1">
                      Implemented staggered KYC features:
                      <ul className="mt-1 list-disc pl-6 text-gray-500">
                        <li className="text-md py-1">
                          Tier 1: Proof of Identity (POI) + Selfie verification.
                        </li>
                        <li className="text-md py-1">
                          Tier 2: Proof of Address (POA).
                        </li>
                      </ul>
                    </li>
                    <li className="text-md py-1">
                      Optimized frontend and backend processes to dynamically
                      support multiple KYC tiers based on user requirements.
                    </li>
                  </ul>
                </li>
                <li className="text-md py-1">
                  <h3 className="font-bold">Backend Architecture</h3>
                  <ul className="mt-1 list-disc pl-6 text-gray-500">
                    <li className="text-md py-1">
                      Enhanced security for user authentication and sensitive
                      data.
                    </li>
                    <li className="text-md py-1">
                      Built APIs to communicate with Sumsub for KYC flow
                      integration.
                    </li>
                  </ul>
                </li>
                <li className="text-md py-1">
                  <h3 className="font-bold">Collaboration</h3>
                  <ul className="mt-1 list-disc pl-6 text-gray-500">
                    <li className="text-md py-1">
                      Worked closely with UX/UI designers to ensure the flows
                      were intuitive and user-friendly.
                    </li>
                    <li className="text-md py-1">
                      Partnered with the product team to prioritize staggered
                      KYC features for different user tiers.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Section>

          <Border className="pt-10" />

          <Section id="keyOutcomes">
            <div className="mb-20 flex flex-col pt-10">
              <AppPageHeader
                icon={<TbCircleKeyFilled size={28} fill="#ed8864" />}
                title="Key Outcomes"
              />
              <ul className="mt-1 list-disc pl-6 text-gray-500">
                <li className="text-md py-1">
                  30% improvement in user onboarding time due to SSO
                  integration.
                </li>
                <li className="text-md py-1">
                  Increased KYC approval rate by implementing a clear, tiered
                  structure for POI and POA verifications.
                </li>
                <li className="text-md py-1">
                  Helped the platform meet compliance requirements in record
                  time, facilitating smoother user verification.
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
              <div className="mb-20 mt-6 flex flex-col flex-wrap gap-4">
                <Image
                  src="/projects/bake-web-app.png"
                  alt="dapp-wallet-transfer-1"
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
                className="mb-10 mt-6 flex flex-wrap gap-4"
                faster
                once
              >
                {bakeWebAppTech.map(({ name, image, link }) => (
                  <FadeIn key={name} className="flex w-24 flex-col self-start">
                    <div className="mt-auto">
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={image}
                          className="m-auto rounded-md object-contain"
                          alt={`${name} logo`}
                          height={64}
                          width={64}
                          style={{
                            width: 64,
                            height: 64,
                          }}
                        />
                        <h4 className="m-2 mx-auto w-min px-2 text-center text-sm font-semibold tracking-tight text-gray-500">
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

export default BakeWebApp;
