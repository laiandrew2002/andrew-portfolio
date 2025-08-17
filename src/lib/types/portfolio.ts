/**
 * Portfolio-specific types and interfaces
 */

import { BaseEntity, ImageAsset } from './common';

export const PROJECT_CATEGORIES = {
  WEB_APP: 'web-app',
  MOBILE_APP: 'mobile-app',
  STATIC_SITE: 'static-site',
  DAPP: 'dapp',
} as const;

export const TECHNOLOGY_CATEGORIES = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DATABASE: 'database',
  TOOLS: 'tools',
  BLOCKCHAIN: 'blockchain',
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];
export type TechnologyCategory =
  (typeof TECHNOLOGY_CATEGORIES)[keyof typeof TECHNOLOGY_CATEGORIES];

export interface Technology {
  name: string;
  image: string;
  link?: string;
  category: TechnologyCategory;
}

export interface ProjectImage extends ImageAsset {
  caption?: string;
  isHero?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  impact?: string;
}

export interface Project extends BaseEntity {
  url: string;
  pathname: string;
  href: string;
  framework: string;
  technologies: Technology[];
  images: ProjectImage[];
  features: string[];
  industry?: string;
  developedIn?: string;
  projectType?: string;
  service?: string;
  category: ProjectCategory;
}

export interface WorkExperience extends BaseEntity {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  achievements: Achievement[];
  technologies: Technology[];
  companyLogo: ImageAsset;
  isCurrentRole?: boolean;
}

export interface Skill {
  category: string;
  technologies: Technology[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  extendedBio: string;
  profileImage: ImageAsset;
  languages: Language[];
}

export interface Language {
  name: string;
  level: 'Beginner' | 'Moderate' | 'Advanced' | 'Native';
}

export interface ContactInfo {
  email: string;
  emailSubject: string;
}

export interface SocialMediaProfile {
  title: string;
  href: string;
  platform: string;
}
