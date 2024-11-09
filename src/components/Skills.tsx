'use client';

import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from './FadeIn';

const skills = [
  {
    name: 'Programming Languages',
    logos: [
      {
        name: 'JavaScript',
        image: '/logos/js-logo.png',
      },
      {
        name: 'TypeScript',
        image: '/logos/ts-logo.png',
      },
      {
        name: 'Python',
        image: '/logos/python-logo.png',
      },
    ],
  },
  {
    name: 'Frontend Frameworks',
    logos: [
      {
        name: 'HTML5',
        image: '/logos/html5-logo.png',
      },
      {
        name: 'CSS3',
        image: '/logos/css-logo.png',
      },
      {
        name: 'React.js',
        image: '/logos/react-logo.png',
      },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
      },
      {
        name: 'Redux',
        image: '/logos/redux-logo.png',
      },
      {
        name: 'React Query',
        image: '/logos/react-query-logo.png',
      },
      {
        name: 'Zustand',
        image: '/logos/zustand-logo.png',
      },
      {
        name: 'React Native',
        image: '/logos/rnative-logo.png',
      },
      {
        name: 'TailwindCSS',
        image: '/logos/tailwindcss-logo.png',
      },
    ],
  },
  {
    name: 'Backend Frameworks',
    logos: [
      {
        name: 'Node.js',
        image: '/logos/nodejs-logo.png',
      },
      {
        name: 'Express.js',
        image: '/logos/express-logo.png',
      },
      {
        name: 'PostgresSql',
        image: '/logos/postgres-logo.png',
      },
      {
        name: 'Redis',
        image: '/logos/redis-logo.png',
      },
      {
        name: 'MongoDB',
        image: '/logos/mongodb-logo.webp',
      },
    ],
  },
  {
    name: 'Blockchain/Web3',
    logos: [
      {
        name: 'Ether.js',
        image: '/logos/ethers-logo.png',
      },
      {
        name: 'Metamask Integration',
        image: '/logos/metamask-logo.png',
      },
    ],
  },
  {
    name: 'Tools',
    logos: [
      {
        name: 'Git',
        image: '/logos/git-logo.png',
      },
      {
        name: 'Github',
        image: '/logos/github-logo.webp',
      },
      { name: 'Docker', image: '/logos/docker-logo.png' },
    ],
  },
];

export default function Skills() {
  const controls = useAnimationControls();

  return (
    <div className="container">
      <FadeInStagger faster animate={controls} className="relative z-10 flex flex-col gap-4 mt-20">
        {skills.map(({ name, logos: skills }, index) => (
          <div key={index}>
            <div className="flex items-center mb-6">
              <h3 className="text-center text-2xl font-semibold">{name}</h3>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
              {skills.map((skill, index) => {
                return (
                  <FadeIn key={index} className="w-24 flex flex-col">
                    <div>
                      <Image
                        src={skill.image}
                        className="object-contain rounded-md m-auto"
                        alt=""
                        height={64}
                        width={64}
                        style={{
                          width: 64,
                          height: 64,
                        }}
                      />
                      <h3 className="text-sm font-semibold tracking-tight text-gray-500 text-center w-min px-2 m-2 mx-auto">{skill.name}</h3>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        ))}
      </FadeInStagger>
    </div>
  );
}
