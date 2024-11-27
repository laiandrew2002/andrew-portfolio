'use client';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import GlowCard from './GlowCard';
import dappWalletTransfer from '../../public/projects/dapp-wallet-transfer.png';
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
    href: '/apps/dapp-wallet-transfer',
    name: 'DApp Wallet Transfer',
    full: true,
    description: 'A decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.',
    image: { src: dappWalletTransfer },
  },
  {
    href: '/apps/bake-io',
    name: 'Bake.io',
    full: true,
    description: 'A static website built with Gatsby.js to allow new users to browse Bake products and services.',
    image: { src: bakeio },
  },
  {
    // href: '/apps/bake-web-app',
    name: 'Bake Web App',
    full: true,
    description: 'A web application built with React.js and Redux to allow users to use Bake products and services. The backend of the products and services are running on Node.js. with PostgreSQL and Redis.',
    image: { src: bakeWebApp },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 3xl:grid-cols-2">
        {projects.map((project, index) => (
          <GlowCard
            key={project.name + index}
            className={clsx('hover:shadow-my_work_yellow/90',
            )}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div className='flex flex-col p-4'>
              <div className="text-2xl text-my_work_yellow mb-4">{project.name}</div>
              <div className='flex xl:flex-row gap-4 flex-col'>
                <div className='flex flex-col justify-between w-full'>
                  <div className='text-white w-full'>
                    {project.description}
                  </div>
                  {project.href && <Button
                    className="flex items-center gap-x-2 px-4 py-2 mt-4 w-fit"
                    variant="secondary"
                    arrow="right"
                    href={project.href}
                  >
                    Learn more
                  </Button>}
                </div>
                <Image
                  placeholder="blur"
                  className={clsx(
                    'z-10 my-work-img-shadow xl:w-[50%] w-full',
                  )}
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
