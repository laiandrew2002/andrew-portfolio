/**
 * Work experience data constants
 */

import { WorkExperience } from '../types/portfolio';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'cake-group',
    title: 'Software Engineer',
    company: 'Cake Group',
    position: 'Software Engineer',
    startDate: 'April 2021',
    endDate: 'Oct 2024',
    description:
      'Spearheaded development and maintenance for high-traffic web applications',
    achievements: [
      {
        title: 'Web Application Development',
        description:
          'Spearheaded development and maintenance for high-traffic web applications, delivering a seamless user experience across Bake website and Bake web application using React (TypeScript), Redux, and Node.js (Express/TypeScript), Postgres Database and Redis.',
        impact: 'Improved user experience across multiple platforms',
      },
      {
        title: 'Admin Panel Enhancement',
        description:
          'Enhanced the company admin panel with React Admin and React Query, improving data accessibility for internal teams.',
        impact: 'Improved internal team productivity',
      },
      {
        title: 'Authentication Improvements',
        description:
          'Increased sign up and login rate by implementing SSO (Facebook/Google/Apple).',
        impact: '30% increase in sign up and login rate',
      },
      {
        title: 'Security Enhancement',
        description:
          'Increased security through continuously monitor/upgrade on authentication & authorization flows.',
        impact: 'Enhanced platform security',
      },
      {
        title: 'KYC Process Automation',
        description:
          'Reduced the KYC processing time by implementing automation KYC process with third party provider (Sumsub) and Singpass Myinfo for Singapore users.',
        impact: '80% reduction in KYC processing time',
      },
      {
        title: 'Compliance Features',
        description:
          'Developed features to comply with country-specific restrictions, improving platform adaptability for diverse user bases.',
        impact: 'Improved platform adaptability',
      },
      {
        title: 'CMS Development',
        description:
          'Developed a CMS on Admin panel that optimized content delivery speed, enhancing user experience and reducing load times.',
        impact: 'Enhanced user experience and reduced load times',
      },
    ],
    technologies: [
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      { name: 'Gatsby', image: '/logos/gatsby-logo.png', category: 'frontend' },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'Redux', image: '/logos/redux-logo.png', category: 'frontend' },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      {
        name: 'Express.js',
        image: '/logos/express-logo.png',
        category: 'backend',
      },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      { name: 'Redis', image: '/logos/redis-logo.png', category: 'database' },
      { name: 'React Admin', image: '', category: 'frontend' },
      {
        name: 'React Query',
        image: '/logos/react-query-logo.png',
        category: 'frontend',
      },
    ],
    companyLogo: {
      src: '/workExperience/cake_logo.jpeg',
      alt: 'Cake Group Logo',
      width: 96,
      height: 96,
    },
    isCurrentRole: false,
  },
  {
    id: 'ufinity',
    title: 'Software Engineer',
    company: 'Ufinity Pte Ltd',
    position: 'Software Engineer',
    startDate: 'Nov 2020',
    endDate: 'Mar 2021',
    description: 'Contributed to the LifeSG mobile application development',
    achievements: [
      {
        title: 'LifeSG Mobile App Development',
        description:
          'Contributed to the LifeSG mobile application (iOS & Android) with React Native (TypeScript), enhancing user experience through performance optimization and clean UI design.',
        impact: 'Enhanced user experience for government mobile app',
      },
      {
        title: 'Agile Development',
        description:
          'Played a pivotal role in agile development, with a focus on TDD and high-quality code production through pair programming.',
        impact: 'Improved code quality and development efficiency',
      },
      {
        title: 'Project Estimation',
        description:
          'Recognized for delivering programming estimates with high accuracy, enabling efficient resource allocation.',
        impact: 'Improved project planning and resource allocation',
      },
    ],
    technologies: [
      { name: 'JavaScript', image: '/logos/js-logo.png', category: 'frontend' },
      { name: 'TypeScript', image: '/logos/ts-logo.png', category: 'frontend' },
      {
        name: 'React Native',
        image: '/logos/rnative-logo.png',
        category: 'frontend',
      },
      { name: 'Redux', image: '/logos/redux-logo.png', category: 'frontend' },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      { name: 'Koa.js', image: '', category: 'backend' },
      {
        name: 'PostgreSQL',
        image: '/logos/postgres-logo.png',
        category: 'database',
      },
      { name: 'Redis', image: '/logos/redis-logo.png', category: 'database' },
    ],
    companyLogo: {
      src: '/workExperience/ufinity_logo.jpeg',
      alt: 'Ufinity Logo',
      width: 96,
      height: 96,
    },
    isCurrentRole: false,
  },
  {
    id: 'dxc-technology',
    title: 'Associate Professional Programmer Analyst',
    company: 'DXC Technology',
    position: 'Associate Professional Programmer Analyst',
    startDate: 'Feb 2019',
    endDate: 'Nov 2020',
    description: 'Involved in API gateway and microservice development',
    achievements: [
      {
        title: 'API Gateway Frontend',
        description:
          'Involved in the development of the front end of an API gateway using React.js & Redux.',
        impact: 'Contributed to API gateway user interface',
      },
      {
        title: 'REST API Generator',
        description: 'Developed a REST API generator using loopback in Node.js',
        impact: 'Automated API generation process',
      },
      {
        title: 'Singpass OIDC Integration',
        description:
          'Involved in the development of integration of a microservice to provide Singpass OIDC authentication for clients. (Node.js & Express.js).',
        impact: 'Enhanced authentication capabilities',
      },
    ],
    technologies: [
      { name: 'JavaScript', image: '/logos/js-logo.png', category: 'frontend' },
      { name: 'React', image: '/logos/react-logo.png', category: 'frontend' },
      { name: 'Redux', image: '/logos/redux-logo.png', category: 'frontend' },
      { name: 'Node.js', image: '/logos/nodejs-logo.png', category: 'backend' },
      { name: 'Loopback.js', image: '', category: 'backend' },
      { name: 'MySQL', image: '', category: 'database' },
    ],
    companyLogo: {
      src: '/workExperience/dxc_logo.jpg',
      alt: 'DXC Technology Logo',
      width: 96,
      height: 96,
    },
    isCurrentRole: false,
  },
] as const;
