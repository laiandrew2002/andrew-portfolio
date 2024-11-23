import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Border from '@/components/Border';
import Section from '@/components/Section';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import Button from '@/components/Button';
import Link from 'next/link';
import { ChallengeIcon, PictureIcon, TechnologiesIcon } from '@/icons';
import AppPageHeader from '@/components/CollapsableMenu/components/AppPageHeader';

export const sections = [
  { index: 0, title: 'About', id: 'about' },
  { index: 1, title: 'Requirements', id: 'requirements' },
  { index: 2, title: 'Screenshots', id: 'screenshots' },
  { index: 3, title: 'Technologies', id: 'technologies' },
];

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
]


const DappWalletTransfer = () => {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <Container>
        <header>
          <Section id="about">
          <FadeInStagger once>
            <FadeIn>
              <div className='flex flex-col justify-center gap-4 mt-20 mb-20'>
                <h1 className='text-3xl font-bold'>DApp Wallet Transfer</h1>
                <p className='text-lg text-gray-500'>
                  A simple decentralized application (DApp) that connects to Metamask and enables users to transfer cryptocurrencies to other wallets.
                </p>

                <div className='flex flex-col gap-2'>
                  <div className="px-6 py-4 sm:border-l border-gray-500/20">
                    <dt className="font-semibold text-blue-100">Industry</dt>
                    <dd>Web3</dd>
                  </div>
                  <div className="px-6 py-4 sm:border-l border-gray-500/20">
                    <dt className="font-semibold text-blue-100">Developed In</dt>
                    <dd>2024</dd>
                  </div>
                  <div className="px-6 py-4 sm:border-l border-gray-500/20">
                    <dt className="font-semibold text-blue-100">Project Type</dt>
                    <dd>Personal</dd>
                  </div>
                  <div className="px-6 py-4 sm:border-l border-gray-500/20">
                    <dt className="font-semibold text-blue-100">Service</dt>
                    <dd>Web Application</dd>
                  </div>
                </div>
                <div className='mt-5'>
                  <Button className="flex items-center gap-x-2" variant="secondary" arrow="right">
                    <Link href="https://dapp-wallet-transfer.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </FadeInStagger>
          </Section>
        </header>

        <Border className='py-10' />

        <FadeIn>
          <Section id="requirements">
            <div className='flex flex-col mb-20'>
              <AppPageHeader icon={<ChallengeIcon width='28' height='28'/>} title="Requirements" />
              <ul className="list-disc pl-6 mt-1 text-gray-500">
                <li className="text-md py-1">
                  Built with Next.js and integrates with Metamask to connect to Sepolia testnet.
                </li>
                <li className="text-md py-1">
                  Users should be able to connect their ETH wallet on metamask and view their balance and transaction history.
                </li>
                <li className="text-md py-1">
                  Users should be able to send and receive ETH tokens on Sepolia testnet.
                </li>
                <li className="text-md py-1">
                  UI should be responsive and mobile-friendly.
                </li>
              </ul>
            </div>
          </Section>

          <Border className='py-10' />

          <Section id="screenshots">
            <AppPageHeader icon={<PictureIcon width='28' height='28' fill='white'/>} title="Screenshots" />
            <div className='flex flex-col gap-4 mt-6 mb-20 flex-wrap'>
              <Image
                src="/projects/dapp-wallet-transfer.png"
                alt="dapp-wallet-transfer-1"
                layout="responsive"
                width={16} // Aspect ratio width
                height={9}
              />
              <Image
                src="/work/dapp-wallet-transfer-2.png"
                alt="dapp-wallet-transfer-2"
                layout="responsive"
                width={16} // Aspect ratio width
                height={9}
              />
            </div>
          </Section>

          <Border className='py-10' />

          <Section id="technologies">
            <AppPageHeader icon={<TechnologiesIcon width='28' height='28' fill='white'/>} title="Technologies" />
            <FadeInStagger className="flex gap-4 mt-6 mb-10 flex-wrap" faster once>
              {dappWalletTransferTech.map(({ name, image, link }) => (
                <FadeIn key={name} className="w-24 flex flex-col self-start">
                  <div className="mt-auto">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={image}
                        className="object-contain rounded-md m-auto"
                        alt={`${name} logo`}
                        height={64}
                        width={64}
                        style={{
                          width: 64,
                          height: 64,
                        }}
                      />
                      <h4 className="text-sm font-semibold tracking-tight text-gray-500 text-center w-min px-2 m-2 mx-auto">
                        {name}
                      </h4>
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </Section>
        </FadeIn>
      </Container>
    </div>
  );
};

export default DappWalletTransfer;
