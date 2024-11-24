import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import ActivityBar from "@/components/ActivityBar";
import TabsContainer from "@/components/TabContainer";
import NavigationChange from "@/components/NavigationChange";
import { sections } from "./page";
import { sections as dappWalletTransferSections } from "@/app/apps/dapp-wallet-transfer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andrew Lai - Portfolio",
  description: "Andrew Lai - Portfolio",
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
    // '/apps/bake-io': sections,
    // '/apps/bake-web-app': sections,
  };

  const myWork: MyWork[] = [
    {
      title: 'DApp-Wallet-Transfer.tsx',
      description: 'A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
      url: 'https://dapp-wallet-transfer.vercel.app/',
      pathname: '/apps/dapp-wallet-transfer',
      href: '/apps/dapp-wallet-transfer',
      framework: 'react',
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark_bg min-h-screen max-h-screen flex flex-col scroll-smooth`}
      >
        <TopBar />
        <main className="flex-1 flex overflow-hidden relative">
          <ActivityBar sections={mainSection} myWork={myWork} />
          <div className="flex w-full flex-col overflow-hidden">
            <TabsContainer />
            {children}
          </div>
        </main>
        <BottomBar />
        <NavigationChange allPaths={[...myWork]} />
      </body>
    </html>
  );
}
