'use client';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import GlowCard from './GlowCard';
import dappWalletTransfer from '../../public/projects/dapp-wallet-transfer.png';
import finTrackWebApp from '../../public/projects/finance-2.png';
import bakeio from '../../public/projects/bake-io.png';
import bakeWebApp from '../../public/projects/bake-web-app.png';
import Button from './Button';

interface Project {
  href?: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: StaticImageData;
  };
}

const projects: Project[] = [
  {
    href: '/apps/fintrack-web-app',
    name: 'FinTrack Web App',
    full: true,
    description:
      'A full-stack Income and Expenses Tracker SaaS web application built with Next.js, featuring AI-powered personalized financial advice to help users manage their finances effectively.',
    image: { src: finTrackWebApp },
  },
  {
    href: '/apps/bake-web-app',
    name: 'Bake Web App',
    full: true,
    description:
      'A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.',
    image: { src: bakeWebApp },
  },
  {
    href: '/apps/dapp-wallet-transfer',
    name: 'DApp Wallet Transfer',
    full: true,
    description:
      'A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
    image: { src: dappWalletTransfer },
  },
  {
    href: '/apps/bake-io',
    name: 'Bake.io',
    full: true,
    description:
      'A static website built with Gatsby.js to allow new users to browse Bake products and services.',
    image: { src: bakeio },
  },
];

export default function MyWork() {
  return (
    <div className="@container relative z-10 mt-20">
      <div className="3xl:grid-cols-2 grid grid-cols-1 gap-8 pt-10">
        {projects.map((project, index) => (
          <GlowCard
            key={project.name + index}
            className={clsx('hover:shadow-my_work_yellow/90')}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div className="flex flex-col p-4">
              <div className="mb-4 text-2xl text-my_work_yellow">
                {project.name}
              </div>
              <div className="flex flex-col gap-4 xl:flex-row">
                <div className="flex w-full flex-col justify-between">
                  <div className="w-full text-white">{project.description}</div>
                  {project.href && (
                    <Button
                      className="mt-4 flex w-fit items-center gap-x-2 px-4 py-2"
                      variant="secondary"
                      arrow="right"
                      href={project.href}
                    >
                      Learn more
                    </Button>
                  )}
                </div>
                <Image
                  placeholder="blur"
                  className={clsx('my-work-img-shadow z-10 w-full xl:w-[50%]')}
                  src={project.image.src}
                  alt={project.name}
                />
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
