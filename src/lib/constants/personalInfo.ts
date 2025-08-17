/**
 * Personal information constants
 */

export const PERSONAL_INFO = {
  name: 'Andrew Lai',
  title: 'Full stack software engineer',
  shortBio:
    'Result-oriented software engineer with 5+ years of expertise in building responsive, high-performance web and mobile applications using React, TypeScript, and Node.js.',
  extendedBio:
    'Skilled in leading projects and collaborating in cross-functional teams to drive innovation and deliver measurable results.',
  profileImage: {
    src: '/andrew.jpg',
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
