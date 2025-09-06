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
  { index: 1, title: 'Requirements', id: 'requirements' },
  { index: 2, title: 'Screenshots', id: 'screenshots' },
  { index: 3, title: 'Technologies', id: 'technologies' },
];

// Page metadata
const metadata: AppPageMetadata = {
  title: 'DApp Wallet Transfer',
  description:
    'A simple decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
  industry: 'Web3',
  developedIn: '2024',
  projectType: 'Personal',
  service: 'Web Application',
  websiteUrl: 'https://dapp-wallet-transfer.vercel.app/',
};

// Technologies data
const dappWalletTransferTech = [
  {
    name: 'Next.js',
    image: '/logos/nextjs-logo.png',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Ethers.js',
    image: '/logos/ethers-logo.png',
    link: 'https://docs.ethers.io/v5/',
  },
  {
    name: 'Metamask',
    image: '/logos/metamask-logo.png',
    link: 'https://metamask.io/',
  },
  {
    name: 'Chakra UI',
    image: '/logos/chakra-logo.png',
    link: 'https://chakra-ui.com/',
  },
  {
    name: 'Tailwind CSS',
    image: '/logos/tailwindcss-logo.png',
    link: 'https://tailwindcss.com/',
  },
];

// Requirements data
const requirements = [
  'Built with Next.js and integrates with Metamask to connect to Sepolia testnet.',
  'Users should be able to connect their ETH wallet on metamask and view their balance and transaction history.',
  'Users should be able to send and receive ETH tokens on Sepolia testnet.',
  'UI should be responsive and mobile-friendly.',
];

// Screenshots data
const screenshots = [
  { src: '/projects/dapp-wallet-transfer.png', alt: 'dapp-wallet-transfer-1' },
  { src: '/work/dapp-wallet-transfer-2.png', alt: 'dapp-wallet-transfer-2' },
];

const DappWalletTransfer = () => {
  // Define page sections
  const pageSections: AppPageSection[] = [
    {
      id: 'requirements',
      title: 'Requirements',
      icon: <ChallengeIcon width="28" height="28" />,
      content: <FeaturesSection features={requirements} />,
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
      content: <TechnologiesSection technologies={dappWalletTransferTech} />,
    },
  ];

  return <AppPageLayout metadata={metadata} sections={pageSections} />;
};

export default DappWalletTransfer;
