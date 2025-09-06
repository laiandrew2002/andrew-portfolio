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
import { TbCircleKeyFilled } from 'react-icons/tb';

export const sections = [
  { index: 0, title: 'About', id: 'about' },
  { index: 1, title: 'Features', id: 'features' },
  { index: 3, title: 'Challenges', id: 'keyOutcomes' },
  { index: 4, title: 'Screenshots', id: 'screenshots' },
  { index: 5, title: 'Technologies', id: 'technologies' },
];

// Page metadata
const metadata: AppPageMetadata = {
  title: 'FinTrack Expenses & Incomes Tracker Web Application',
  description:
    "This finance tracker application provides users with a comprehensive summary of their financial data, including income, expenses, and savings. Users has the ability to enter the transactions manually, import transactions from CSV files, or connect their bank accounts to automatically import transactions. The application also provides personalized financial advice based on the user's financial data.",
  industry: 'Finance',
  developedIn: '2024',
  projectType: 'Personal',
  service: 'Web Application',
  websiteUrl: 'https://finance-tracker-pied-tau.vercel.app/',
};

// Technologies data
const fintrackWebAppTech = [
  {
    name: 'Next.js',
    image: '/logos/nextjs-logo.png',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Zustand',
    image: '/logos/zustand-logo.png',
    link: 'https://zustand.js.org/',
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
  {
    name: 'Shadcn UI',
    image: '/logos/shadcn-logo.png',
    link: 'https://ui.shadcn.com/',
  },
  {
    name: 'Hono.js',
    image: '/logos/hono-logo.png',
    link: 'https://honojs.dev/',
  },
  {
    name: 'Drizzle ORM',
    image: '/logos/drizzle-logo.png',
    link: 'https://drizzle.org/',
  },
  {
    name: 'PostgreSQL',
    image: '/logos/postgres-logo.png',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'Google Generative AI',
    image: '/logos/google-ai-logo.png',
    link: 'https://cloud.google.com/generative-ai',
  },
];

// Features data
const features = [
  'Built with Next.js on the frontend, Hono.js on the backend, and PostgreSQL for database.',
  "It provides daily personalized financial advice based on the user's financial data.",
  "It provides an overview of the user's financial data, including income, expenses, and savings with charts and graphs.",
  'Users can enter transactions manually, import transactions from CSV files, or connect their bank accounts to automatically import transactions.',
  'Users are able create multiple accounts and categories to organize their financial data.',
];

// Challenges data
const challenges = [
  {
    content:
      'Learning to use new frameworks and libraries like Hono.js and Drizzle ORM.',
  },
  {
    content:
      'Designing the database schema and fully utilizing Drizzle ORM to interact with the database.',
  },
  {
    content:
      "Implementing Google Generative AI to generate personalized financial advice based on the user's financial data.",
  },
];

// Screenshots data
const screenshots = [
  { src: '/projects/finance-1.png', alt: 'fintrack-web-app-1' },
  { src: '/projects/finance-2.png', alt: 'fintrack-web-app-2' },
];

const FinTrackWebApp = () => {
  // Define page sections
  const pageSections: AppPageSection[] = [
    {
      id: 'features',
      title: 'Features',
      icon: <ChallengeIcon width="28" height="28" />,
      content: <FeaturesSection features={features} />,
    },
    {
      id: 'keyOutcomes',
      title: 'Challenges',
      icon: <TbCircleKeyFilled size={28} fill="#ed8864" />,
      content: <CustomListSection items={challenges} />,
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
      content: <TechnologiesSection technologies={fintrackWebAppTech} />,
    },
  ];

  return <AppPageLayout metadata={metadata} sections={pageSections} />;
};

export default FinTrackWebApp;
