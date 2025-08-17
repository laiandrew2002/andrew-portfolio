/**
 * Skills and technologies data constants
 */

import { Skill, Technology } from '../types/portfolio';

export const SKILLS: Skill[] = [
  {
    category: 'Programming Languages',
    technologies: [
      {
        name: 'JavaScript',
        image: '/logos/js-logo.png',
        category: 'frontend',
      },
      {
        name: 'TypeScript',
        image: '/logos/ts-logo.png',
        category: 'frontend',
      },
      {
        name: 'Python',
        image: '/logos/python-logo.png',
        category: 'backend',
      },
    ],
  },
  {
    category: 'Frontend Frameworks',
    technologies: [
      {
        name: 'HTML5',
        image: '/logos/html5-logo.png',
        category: 'frontend',
      },
      {
        name: 'CSS3',
        image: '/logos/css-logo.png',
        category: 'frontend',
      },
      {
        name: 'React.js',
        image: '/logos/react-logo.png',
        category: 'frontend',
      },
      {
        name: 'Next.js',
        image: '/logos/nextjs-logo.png',
        category: 'frontend',
      },
      {
        name: 'Redux',
        image: '/logos/redux-logo.png',
        category: 'frontend',
      },
      {
        name: 'React Query',
        image: '/logos/react-query-logo.png',
        category: 'frontend',
      },
      {
        name: 'Zustand',
        image: '/logos/zustand-logo.png',
        category: 'frontend',
      },
      {
        name: 'React Native',
        image: '/logos/rnative-logo.png',
        category: 'frontend',
      },
      {
        name: 'TailwindCSS',
        image: '/logos/tailwindcss-logo.png',
        category: 'frontend',
      },
    ],
  },
  {
    category: 'Backend Frameworks',
    technologies: [
      {
        name: 'Node.js',
        image: '/logos/nodejs-logo.png',
        category: 'backend',
      },
      {
        name: 'Express.js',
        image: '/logos/express-logo.png',
        category: 'backend',
      },
      {
        name: 'Hono.js',
        image: '/logos/hono-logo.png',
        category: 'backend',
      },
      {
        name: 'PostgresSql',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      {
        name: 'Redis',
        image: '/logos/redis-logo.png',
        category: 'database',
      },
      {
        name: 'MongoDB',
        image: '/logos/mongodb-logo.webp',
        category: 'database',
      },
    ],
  },
  {
    category: 'Blockchain/Web3',
    technologies: [
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
  },
  {
    category: 'Tools',
    technologies: [
      {
        name: 'Git',
        image: '/logos/git-logo.png',
        category: 'tools',
      },
      {
        name: 'Github',
        image: '/logos/github-logo.webp',
        category: 'tools',
      },
      {
        name: 'Docker',
        image: '/logos/docker-logo.png',
        category: 'tools',
      },
    ],
  },
] as const;

// Export individual technology arrays for easier access
export const PROGRAMMING_LANGUAGES = SKILLS[0]?.technologies || [];
export const FRONTEND_FRAMEWORKS = SKILLS[1]?.technologies || [];
export const BACKEND_FRAMEWORKS = SKILLS[2]?.technologies || [];
export const BLOCKCHAIN_TECHNOLOGIES = SKILLS[3]?.technologies || [];
export const DEVELOPMENT_TOOLS = SKILLS[4]?.technologies || [];

// Export all technologies as a flat array
export const ALL_TECHNOLOGIES: Technology[] = SKILLS.flatMap(
  skill => skill.technologies
);
