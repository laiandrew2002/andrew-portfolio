/**
 * Site-wide configuration constants
 */

export const SITE_CONFIG = {
  name: 'Andrew Portfolio',
  title: 'Andrew Lai - Full Stack Developer',
  description:
    'Portfolio website showcasing full-stack development projects and experience',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: {
    name: 'Andrew Lai',
    email: 'laiandrew2002@gmail.com',
    github: 'https://github.com/laiandrew2002',
    linkedin: 'https://www.linkedin.com/in/andrew-lai-abc/',
  },
  social: {
    github: 'https://github.com/laiandrew2002',
    linkedin: 'https://www.linkedin.com/in/andrew-lai-abc/',
    email: 'laiandrew2002@gmail.com',
  },
} as const;

export const THEME_CONFIG = {
  colors: {
    primary: '#3b82f6',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#ffffff',
    foreground: '#0f172a',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;
