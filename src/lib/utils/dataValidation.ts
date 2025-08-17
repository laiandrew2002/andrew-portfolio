/**
 * Data validation utilities for portfolio data
 */

import {
  Project,
  WorkExperience,
  Skill,
  Technology,
  PersonalInfo,
  ContactInfo,
  SocialMediaProfile,
  ProjectCategory,
  TechnologyCategory,
  PROJECT_CATEGORIES,
  TECHNOLOGY_CATEGORIES,
} from '../types/portfolio';

/**
 * Validates if a string is a valid project category
 */
export function isValidProjectCategory(
  category: string
): category is ProjectCategory {
  return Object.values(PROJECT_CATEGORIES).includes(
    category as ProjectCategory
  );
}

/**
 * Validates if a string is a valid technology category
 */
export function isValidTechnologyCategory(
  category: string
): category is TechnologyCategory {
  return Object.values(TECHNOLOGY_CATEGORIES).includes(
    category as TechnologyCategory
  );
}

/**
 * Validates a Technology object
 */
export function validateTechnology(tech: unknown): tech is Technology {
  if (typeof tech !== 'object' || tech === null) return false;

  const t = tech as Record<string, unknown>;

  return (
    typeof t.name === 'string' &&
    typeof t.image === 'string' &&
    isValidTechnologyCategory(t.category as string) &&
    (t.link === undefined || typeof t.link === 'string')
  );
}

/**
 * Validates a Project object
 */
export function validateProject(project: unknown): project is Project {
  if (typeof project !== 'object' || project === null) return false;

  const p = project as Record<string, unknown>;

  return (
    typeof p.id === 'string' &&
    typeof p.title === 'string' &&
    typeof p.description === 'string' &&
    typeof p.url === 'string' &&
    typeof p.pathname === 'string' &&
    typeof p.href === 'string' &&
    typeof p.framework === 'string' &&
    isValidProjectCategory(p.category as string) &&
    Array.isArray(p.technologies) &&
    p.technologies.every(validateTechnology) &&
    Array.isArray(p.images) &&
    Array.isArray(p.features) &&
    p.features.every(f => typeof f === 'string')
  );
}

/**
 * Validates a WorkExperience object
 */
export function validateWorkExperience(
  experience: unknown
): experience is WorkExperience {
  if (typeof experience !== 'object' || experience === null) return false;

  const e = experience as Record<string, unknown>;

  return (
    typeof e.id === 'string' &&
    typeof e.title === 'string' &&
    typeof e.description === 'string' &&
    typeof e.company === 'string' &&
    typeof e.position === 'string' &&
    typeof e.startDate === 'string' &&
    (e.endDate === undefined || typeof e.endDate === 'string') &&
    Array.isArray(e.achievements) &&
    Array.isArray(e.technologies) &&
    e.technologies.every(validateTechnology) &&
    typeof e.companyLogo === 'object' &&
    (e.isCurrentRole === undefined || typeof e.isCurrentRole === 'boolean')
  );
}

/**
 * Validates a Skill object
 */
export function validateSkill(skill: unknown): skill is Skill {
  if (typeof skill !== 'object' || skill === null) return false;

  const s = skill as Record<string, unknown>;

  return (
    typeof s.category === 'string' &&
    Array.isArray(s.technologies) &&
    s.technologies.every(validateTechnology)
  );
}

/**
 * Validates PersonalInfo object
 */
export function validatePersonalInfo(info: unknown): info is PersonalInfo {
  if (typeof info !== 'object' || info === null) return false;

  const i = info as Record<string, unknown>;

  return (
    typeof i.name === 'string' &&
    typeof i.title === 'string' &&
    typeof i.shortBio === 'string' &&
    typeof i.extendedBio === 'string' &&
    typeof i.profileImage === 'object' &&
    Array.isArray(i.languages)
  );
}

/**
 * Validates ContactInfo object
 */
export function validateContactInfo(info: unknown): info is ContactInfo {
  if (typeof info !== 'object' || info === null) return false;

  const i = info as Record<string, unknown>;

  return typeof i.email === 'string' && typeof i.emailSubject === 'string';
}

/**
 * Validates SocialMediaProfile object
 */
export function validateSocialMediaProfile(
  profile: unknown
): profile is SocialMediaProfile {
  if (typeof profile !== 'object' || profile === null) return false;

  const p = profile as Record<string, unknown>;

  return (
    typeof p.title === 'string' &&
    typeof p.href === 'string' &&
    typeof p.platform === 'string'
  );
}

/**
 * Validates an array of projects
 */
export function validateProjects(projects: unknown[]): projects is Project[] {
  return Array.isArray(projects) && projects.every(validateProject);
}

/**
 * Validates an array of work experiences
 */
export function validateWorkExperiences(
  experiences: unknown[]
): experiences is WorkExperience[] {
  return (
    Array.isArray(experiences) && experiences.every(validateWorkExperience)
  );
}

/**
 * Validates an array of skills
 */
export function validateSkills(skills: unknown[]): skills is Skill[] {
  return Array.isArray(skills) && skills.every(validateSkill);
}

/**
 * Validates an array of social media profiles
 */
export function validateSocialMediaProfiles(
  profiles: unknown[]
): profiles is SocialMediaProfile[] {
  return Array.isArray(profiles) && profiles.every(validateSocialMediaProfile);
}
