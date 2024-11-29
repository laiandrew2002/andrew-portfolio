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
import { sections as bakeIoSections } from "@/app/apps/bake-io/page";
import { sections as bakeWebAppSections } from "@/app/apps/bake-web-app/page";

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
    "/": sections,
    "/apps/dapp-wallet-transfer": dappWalletTransferSections,
    "/apps/bake-io": bakeIoSections,
    "/apps/bake-web-app": bakeWebAppSections,
  };

  const myWork: MyWork[] = [
    {
      title: "Bake-Web-App.tsx",
      description:
        "A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.",
      url: "https://app.bake.io",
      pathname: "/apps/bake-web-app",
      href: "/apps/bake-web-app",
      framework: "react",
    },
    {
      title: "DApp-Wallet-Transfer.tsx",
      description:
        "A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.",
      url: "https://dapp-wallet-transfer.vercel.app/",
      pathname: "/apps/dapp-wallet-transfer",
      href: "/apps/dapp-wallet-transfer",
      framework: "react",
    },
    {
      title: "Bake.io.tsx",
      description:
        "A static website built with Gatsby.js to allow new users to browse Bake products and services.",
      url: "https://bake.io",
      pathname: "/apps/bake-io",
      href: "/apps/bake-io",
      framework: "react",
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
