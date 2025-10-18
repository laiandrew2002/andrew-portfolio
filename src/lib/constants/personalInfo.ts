/**
 * Personal information constants
 */

export const PERSONAL_INFO = {
  name: 'Andrew Lai',
  title: 'Full-Stack Software Engineer',
  shortBio:
    'I am a results-driven software engineer with over 5 years of experience designing and developing high-performance web and mobile applications using modern technologies such as React, TypeScript, and Node.js.',
  extendedBio:
    'I enjoy crafting scalable architectures, optimizing user experience, and leading cross-functional teams to turn complex ideas into impactful products. My work blends technical precision with thoughtful design.',
  profileImage: {
    src: '/andrew.png',
    alt: 'andrew portrait',
    width: 200,
    height: 208,
  },
  languages: [
    {
      name: 'Mandarin / Chinese',
      level: 'Advanced',
    },
    {
      name: 'English',
      level: 'Advanced',
    },
    {
      name: 'Malay',
      level: 'Moderate',
    },
  ],
} as const;

export const CONTACT_INFO = {
  email: 'laiandrew2002@gmail.com',
  emailSubject: 'Reach out from portfolio',
} as const;

export const SOCIAL_MEDIA_PROFILES = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/andrew-lai-abc/',
    platform: 'linkedin',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/laiandrew2002',
    platform: 'github',
  },
] as const;
