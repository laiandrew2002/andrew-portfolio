import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import ActivityBar from "@/components/ActivityBar";
import TabsContainer from "@/components/TabContainer";
import NavigationChange from "@/components/NavigationChange";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allSections = {};

  const allApps = null;
  const allLeetcode = null;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark_bg min-h-screen max-h-screen flex flex-col scroll-smooth`}
      >
        <TopBar />
        <main className="flex-1 flex overflow-hidden relative">
          <ActivityBar sections={allSections} allApps={allApps} allLeetcode={allLeetcode} />
          <div className="flex w-full flex-col overflow-hidden">
            <TabsContainer />
            {children}
          </div>
        </main>
        <BottomBar />
        <NavigationChange allPaths={[]} />
      </body>
    </html>
  );
}
