/**
 * Projects data constants
 */

import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'fintrack-web-app',
    title: 'FinTrack Web App',
    description:
      'A full-stack Income and Expenses Tracker SaaS web application built with Next.js, featuring AI-powered personalized financial advice to help users manage their finances effectively.',
    url: '/apps/fintrack-web-app',
    pathname: '/apps/fintrack-web-app',
    href: '/apps/fintrack-web-app',
    framework: 'Next.js',
    category: 'web-app',
    technologies: [
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
    ],
    images: [
      {
        src: '/projects/finance-2.png',
        alt: 'FinTrack Web App Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Income and expense tracking',
      'AI-powered financial advice',
      'SaaS architecture',
      'User authentication',
      'Data visualization',
    ],
    industry: 'FinTech',
    projectType: 'Full-stack Web Application',
    service: 'Personal Finance Management',
  },
  {
    id: 'bake-web-app',
    title: 'Bake Web App',
    description:
      'A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.',
    url: '/apps/bake-web-app',
    pathname: '/apps/bake-web-app',
    href: '/apps/bake-web-app',
    framework: 'React.js',
    category: 'web-app',
    technologies: [
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'Redux', image: '/logos/redux-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      { name: 'Redis', image: '/logos/redis-logo.png', category: 'database' },
    ],
    images: [
      {
        src: '/projects/bake-web-app.png',
        alt: 'Bake Web App Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'User authentication',
      'Product management',
      'Service integration',
      'Real-time updates',
      'Responsive design',
    ],
    industry: 'FinTech',
    projectType: 'Web Application',
    service: 'Financial Services Platform',
  },
  {
    id: 'dapp-wallet-transfer',
    title: 'DApp Wallet Transfer',
    description:
      'A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
    url: '/apps/dapp-wallet-transfer',
    pathname: '/apps/dapp-wallet-transfer',
    href: '/apps/dapp-wallet-transfer',
    framework: 'React.js',
    category: 'dapp',
    technologies: [
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      {
        name: 'Ether.js',
        image: '/logos/ethers-logo.png',
        category: 'blockchain',
      },
      {
        name: 'Metamask Integration',
        image: '/logos/metamask-logo.png',
        category: 'blockchain',
      },
    ],
    images: [
      {
        src: '/projects/dapp-wallet-transfer.png',
        alt: 'DApp Wallet Transfer Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Metamask integration',
      'Cryptocurrency transfers',
      'Wallet connectivity',
      'Transaction history',
      'Security features',
    ],
    industry: 'Blockchain',
    projectType: 'Decentralized Application',
    service: 'Cryptocurrency Transfer',
  },
  {
    id: 'bake-io',
    title: 'Bake.io',
    description:
      'A static website built with Gatsby.js to allow new users to browse Bake products and services.',
    url: '/apps/bake-io',
    pathname: '/apps/bake-io',
    href: '/apps/bake-io',
    framework: 'Gatsby.js',
    category: 'static-site',
    technologies: [
      { name: 'Gatsby', image: '/logos/gatsby-logo.png', category: 'frontend' },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      { name: 'GraphQL', image: '', category: 'backend' },
    ],
    images: [
      {
        src: '/projects/bake-io.png',
        alt: 'Bake.io Website Screenshot',
        width: 800,
        height: 600,
        isHero: true,
      },
    ],
    features: [
      'Static site generation',
      'SEO optimization',
      'Fast loading',
      'Responsive design',
      'Content management',
    ],
    industry: 'FinTech',
    projectType: 'Static Website',
    service: 'Marketing Website',
  },
] as const;

// Export projects by category for easier filtering
export const WEB_APPS = PROJECTS.filter(
  project => project.category === 'web-app'
);
export const MOBILE_APPS = PROJECTS.filter(
  project => project.category === 'mobile-app'
);
export const STATIC_SITES = PROJECTS.filter(
  project => project.category === 'static-site'
);
export const DAPPS = PROJECTS.filter(project => project.category === 'dapp');
