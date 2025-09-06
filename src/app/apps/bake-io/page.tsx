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
} from '@/components/sections';
import { ChallengeIcon, PictureIcon, TechnologiesIcon } from '@/icons';

export const sections = [
  { index: 0, title: 'About', id: 'about' },
  { index: 1, title: 'Features', id: 'features' },
  { index: 2, title: 'Screenshots', id: 'screenshots' },
  { index: 3, title: 'Technologies', id: 'technologies' },
];

// Page metadata
const metadata: AppPageMetadata = {
  title: 'Bake.io',
  description:
    'A static website built with Gatsby.js to allow new users to browse through Bake products and services.',
  industry: 'Cryptocurrency & Decentralized Finance',
  developedIn: '2020',
  projectType: 'Company',
  service: 'Web Application',
  websiteUrl: 'https://bake.io/',
};

// Technologies data
const bakeIoTech = [
  {
    name: 'Gatsby.js',
    image: '/logos/gatsby-logo.png',
    link: 'https://www.gatsbyjs.com/',
  },
  {
    name: 'Redux',
    image: '/logos/redux-logo.png',
    link: 'https://redux.js.org/',
  },
  {
    name: 'React Query',
    image: '/logos/react-query-logo.png',
    link: 'https://react-query.tanstack.com/',
  },
  {
    name: 'Tailwind CSS',
    image: '/logos/tailwindcss-logo.png',
    link: 'https://tailwindcss.com/',
  },
];

// Features data
const features = [
  'Built with Gatsby.js with responsive design and mobile-friendly.',
  'It has user friendly carousel cards, videos and good illustrations to showcase the products.',
  'Users are able to browse through all products on Bake with comprehensive designs and high-quality images.',
  'Users are able to see varies customized crypto bundles created by influencers.',
  'It is easy to navigate and use the website.',
];

// Screenshots data
const screenshots = [
  { src: '/work/bake-io-1.png', alt: 'bake-io-1' },
  { src: '/work/bake-io-2.png', alt: 'bake-io-2' },
];

const BakeIo = () => {
  // Define page sections
  const pageSections: AppPageSection[] = [
    {
      id: 'features',
      title: 'Features',
      icon: <ChallengeIcon width="28" height="28" />,
      content: <FeaturesSection features={features} />,
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
      content: <TechnologiesSection technologies={bakeIoTech} />,
    },
  ];

  return <AppPageLayout metadata={metadata} sections={pageSections} />;
};

export default BakeIo;
