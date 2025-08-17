/**
 * Test utility to verify data integrity
 */

import {
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  PERSONAL_INFO,
  CONTACT_INFO,
  SOCIAL_MEDIA_PROFILES,
} from '../constants';

/**
 * Test function to verify all data is properly structured
 */
export function testDataIntegrity(): {
  success: boolean;
  errors: string[];
  summary: {
    projectsCount: number;
    workExperienceCount: number;
    skillsCount: number;
    technologiesCount: number;
    socialProfilesCount: number;
  };
} {
  const errors: string[] = [];

  // Test projects data
  if (!Array.isArray(PROJECTS) || PROJECTS.length === 0) {
    errors.push('Projects data is missing or empty');
  } else {
    PROJECTS.forEach((project, index) => {
      if (!project.id || !project.title || !project.description) {
        errors.push(`Project at index ${index} is missing required fields`);
      }
      if (!Array.isArray(project.technologies)) {
        errors.push(
          `Project "${project.title}" has invalid technologies array`
        );
      }
    });
  }

  // Test work experience data
  if (!Array.isArray(WORK_EXPERIENCE) || WORK_EXPERIENCE.length === 0) {
    errors.push('Work experience data is missing or empty');
  } else {
    WORK_EXPERIENCE.forEach((experience, index) => {
      if (!experience.id || !experience.company || !experience.position) {
        errors.push(
          `Work experience at index ${index} is missing required fields`
        );
      }
      if (!Array.isArray(experience.technologies)) {
        errors.push(
          `Work experience "${experience.company}" has invalid technologies array`
        );
      }
    });
  }

  // Test skills data
  if (!Array.isArray(SKILLS) || SKILLS.length === 0) {
    errors.push('Skills data is missing or empty');
  } else {
    SKILLS.forEach((skill, index) => {
      if (!skill.category || !Array.isArray(skill.technologies)) {
        errors.push(
          `Skill category at index ${index} is missing required fields`
        );
      }
    });
  }

  // Test personal info
  if (!PERSONAL_INFO || !PERSONAL_INFO.name || !PERSONAL_INFO.title) {
    errors.push('Personal info is missing or incomplete');
  }

  // Test contact info
  if (!CONTACT_INFO || !CONTACT_INFO.email) {
    errors.push('Contact info is missing or incomplete');
  }

  // Test social media profiles
  if (!Array.isArray(SOCIAL_MEDIA_PROFILES)) {
    errors.push('Social media profiles are missing');
  }

  // Calculate summary
  const technologiesCount = SKILLS.reduce(
    (total, skill) => total + skill.technologies.length,
    0
  );

  return {
    success: errors.length === 0,
    errors,
    summary: {
      projectsCount: PROJECTS.length,
      workExperienceCount: WORK_EXPERIENCE.length,
      skillsCount: SKILLS.length,
      technologiesCount,
      socialProfilesCount: SOCIAL_MEDIA_PROFILES.length,
    },
  };
}
