import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {
  TopBar,
  BottomBar,
  ActivityBar,
  TabContainer,
} from '@/components/layout';
import NavigationChange from '@/components/NavigationChange';
import { sections } from './page';
import { sections as dappWalletTransferSections } from '@/app/apps/dapp-wallet-transfer/page';
import { sections as bakeIoSections } from '@/app/apps/bake-io/page';
import { sections as bakeWebAppSections } from '@/app/apps/bake-web-app/page';
import { sections as fintrackWebAppSections } from '@/app/apps/fintrack-web-app/page';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Andrew Lai - Portfolio',
  description: 'A portfolio website to showcase my skills and experience.',
};

export interface MyWork {
  title: string;
  description: string;
  url: string;
  pathname: string;
  href: string;
  framework: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mainSection = {
    '/': sections,
    '/apps/dapp-wallet-transfer': dappWalletTransferSections,
    '/apps/bake-io': bakeIoSections,
    '/apps/bake-web-app': bakeWebAppSections,
    '/apps/fintrack-web-app': fintrackWebAppSections,
  };

  const myWork: MyWork[] = [
    {
      title: 'FinTrack-Web-App.tsx',
      description:
        'A web application powered by AI and built with Next.js and Hono.js to allow users to track their expenses and incomes.',
      url: 'https://finance-tracker-pied-tau.vercel.app/',
      pathname: '/apps/fintrack-web-app',
      href: '/apps/fintrack-web-app',
      framework: 'react',
    },
    {
      title: 'Bake-Web-App.tsx',
      description:
        'A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.',
      url: 'https://app.bake.io',
      pathname: '/apps/bake-web-app',
      href: '/apps/bake-web-app',
      framework: 'react',
    },
    {
      title: 'DApp-Wallet-Transfer.tsx',
      description:
        'A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
      url: 'https://dapp-wallet-transfer.vercel.app/',
      pathname: '/apps/dapp-wallet-transfer',
      href: '/apps/dapp-wallet-transfer',
      framework: 'react',
    },
    {
      title: 'Bake.io.tsx',
      description:
        'A static website built with Gatsby.js to allow new users to browse Bake products and services.',
      url: 'https://bake.io',
      pathname: '/apps/bake-io',
      href: '/apps/bake-io',
      framework: 'react',
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex max-h-screen min-h-screen flex-col scroll-smooth bg-dark_bg antialiased`}
      >
        <TopBar />
        <main className="relative flex flex-1 overflow-hidden">
          <ActivityBar sections={mainSection} myWork={myWork} />
          <div className="flex w-full flex-col overflow-hidden">
            <TabContainer />
            {children}
          </div>
        </main>
        <BottomBar />
        <NavigationChange allPaths={[...myWork]} />
      </body>
    </html>
  );
}
