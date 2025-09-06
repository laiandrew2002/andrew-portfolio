import React from 'react';
import {
  AppPageLayout,
  type AppPageMetadata,
  type AppPageSection,
} from '@/components/layout';
import {
  FeaturesSection,
  ScreenshotsSection,
  TechnologiesSection,
  CustomListSection,
} from '@/components/sections';
import { ChallengeIcon, PictureIcon, TechnologiesIcon } from '@/icons';
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

// Page metadata
const metadata: AppPageMetadata = {
  title: 'Bake Web Application',
  description:
    'A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.',
  industry: 'Cryptocurrency & Decentralized Finance',
  developedIn: '2020',
  projectType: 'Company',
  service: 'Web Application',
  websiteUrl: 'https://app.bake.io',
};

// Technologies data
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

// Features data
const features = [
  'Built with React with Redux on the frontend, Node.js with Express on the backend and PostgreSQL and Redis for database.',
  'It provides flexible staking, fixed staking, liquidity mining products and services for users to earn rewards and yield on various crypto assets.',
  'Users are able to view all their assets and rewards on the platform with a simple and intuitive interface like charts and graphs.',
  'Users can also views all transactions history and do tax report export.',
];

// Features owned data
const featuresOwned = [
  {
    title: 'Onboarding Process',
    content: '',
    subItems: [
      {
        content:
          'Designed and implemented sign-up and login workflows for seamless user onboarding.',
      },
      {
        content:
          'Integrated Single Sign-On (SSO) functionality (Google, Apple, etc.), ensuring a secure and streamlined user registration process.',
      },
      {
        content:
          'Worked across frontend and backend, ensuring smooth communication and secure data handling.',
      },
    ],
  },
  {
    title: 'KYC (Know Your Customer) Flows',
    content: '',
    subItems: [
      {
        content:
          'Developed and launched new KYC flows in collaboration with the third-party provider Sumsub.',
      },
      {
        content: 'Implemented staggered KYC features:',
        subItems: [
          { content: 'Tier 1: Proof of Identity (POI) + Selfie verification.' },
          { content: 'Tier 2: Proof of Address (POA).' },
        ],
      },
      {
        content:
          'Optimized frontend and backend processes to dynamically support multiple KYC tiers based on user requirements.',
      },
    ],
  },
  {
    title: 'Backend Architecture',
    content: '',
    subItems: [
      {
        content:
          'Enhanced security for user authentication and sensitive data.',
      },
      {
        content:
          'Built APIs to communicate with Sumsub for KYC flow integration.',
      },
    ],
  },
  {
    title: 'Collaboration',
    content: '',
    subItems: [
      {
        content:
          'Worked closely with UX/UI designers to ensure the flows were intuitive and user-friendly.',
      },
      {
        content:
          'Partnered with the product team to prioritize staggered KYC features for different user tiers.',
      },
    ],
  },
];

// Key outcomes data
const keyOutcomes = [
  {
    content: '30% improvement in user onboarding time due to SSO integration.',
  },
  {
    content:
      'Increased KYC approval rate by implementing a clear, tiered structure for POI and POA verifications.',
  },
  {
    content:
      'Helped the platform meet compliance requirements in record time, facilitating smoother user verification.',
  },
];

// Screenshots data
const screenshots = [
  { src: '/projects/bake-web-app.png', alt: 'dapp-wallet-transfer-1' },
];

const BakeWebApp = () => {
  // Define page sections
  const pageSections: AppPageSection[] = [
    {
      id: 'features',
      title: 'Features',
      icon: <ChallengeIcon width="28" height="28" />,
      content: <FeaturesSection features={features} />,
    },
    {
      id: 'featuresOwned',
      title: 'Features Owned and Implemented',
      icon: <MdOutlineFeaturedPlayList size={28} fill="#41d985" />,
      content: <CustomListSection items={featuresOwned} listType="decimal" />,
    },
    {
      id: 'keyOutcomes',
      title: 'Key Outcomes',
      icon: <TbCircleKeyFilled size={28} fill="#ed8864" />,
      content: <CustomListSection items={keyOutcomes} />,
    },
    {
      id: 'screenshots',
      title: 'Screenshots',
      icon: <PictureIcon width="28" height="28" fill="white" />,
      content: <ScreenshotsSection screenshots={screenshots} />,
    },
    {
      id: 'technologies',
      title: 'Technologies',
      icon: <TechnologiesIcon width="28" height="28" fill="white" />,
      content: <TechnologiesSection technologies={bakeWebAppTech} />,
    },
  ];

  return <AppPageLayout metadata={metadata} sections={pageSections} />;
};

export default BakeWebApp;
